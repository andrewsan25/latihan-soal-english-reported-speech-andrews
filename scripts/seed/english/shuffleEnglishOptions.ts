import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import type { AnswerKey, EnglishQuestionSeed } from './types.ts';

const LETTERS: AnswerKey[] = ['A', 'B', 'C', 'D', 'E'];

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeBalancedTargets(count: number): AnswerKey[] {
  const targets: AnswerKey[] = [];
  const offset = Math.floor(Math.random() * LETTERS.length);
  for (let i = 0; i < count; i++) {
    targets.push(LETTERS[(i + offset) % LETTERS.length]);
  }
  return shuffleArray(targets);
}

function findArrayEnd(src: string, openBracketIdx: number): number {
  let depth = 0;
  let i = openBracketIdx;
  while (i < src.length) {
    const ch = src[i];
    if (ch === "'" || ch === '"' || ch === '`') {
      const quote = ch;
      i++;
      while (i < src.length) {
        if (src[i] === '\\') {
          i += 2;
          continue;
        }
        if (quote === '`' && src[i] === '$' && src[i + 1] === '{') {
          i += 2;
          let exprDepth = 1;
          while (i < src.length && exprDepth > 0) {
            if (src[i] === '{') exprDepth++;
            else if (src[i] === '}') exprDepth--;
            i++;
          }
          continue;
        }
        if (src[i] === quote) {
          i++;
          break;
        }
        i++;
      }
      continue;
    }
    if (ch === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    if (ch === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) i++;
      i += 2;
      continue;
    }
    if (ch === '[') depth++;
    else if (ch === ']') {
      depth--;
      if (depth === 0) return i;
    }
    i++;
  }
  throw new Error('Unclosed options array bracket');
}

async function shuffleTopics(): Promise<void> {
  const dataDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'data');
  const topics = [
    { file: 'topic1_reading_texts.ts', exportName: 'topic1ReadingTexts' },
    { file: 'topic2_announcements.ts', exportName: 'topic2Announcements' },
    { file: 'topic3_pos_modals.ts', exportName: 'topic3PosModals' },
    { file: 'topic4_verb_tenses.ts', exportName: 'topic4VerbTenses' },
    { file: 'topic5_reported_speech.ts', exportName: 'topic5ReportedSpeech' },
    { file: 'topic6_imperatives_questions.ts', exportName: 'topic6ImperativesQuestions' },
  ];

  const summary: Record<string, Record<AnswerKey, number>> = {};

  for (const t of topics) {
    const filePath = path.join(dataDir, t.file);
    const mod = await import(pathToFileURL(filePath).href);
    const questions = mod[t.exportName] as EnglishQuestionSeed[];
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error(`Missing array ${t.exportName} in ${t.file}`);
    }

    const targets = makeBalancedTargets(questions.length);
    let src = fs.readFileSync(filePath, 'utf8');

    for (let qi = 0; qi < questions.length; qi++) {
      const q = questions[qi];
      const targetKey = targets[qi];
      const correctObj = q.options.find((o) => o.key === q.correct_answer);
      if (!correctObj) {
        throw new Error(`${q.code} missing option for ${q.correct_answer}`);
      }
      const distractors = shuffleArray(
        q.options.filter((o) => o.key !== q.correct_answer).map((o) => o.text)
      );
      let dIdx = 0;
      const newOpts = LETTERS.map((k) => ({
        key: k,
        text: k === targetKey ? correctObj.text : distractors[dIdx++],
      }));

      const codeToken = `code: '${q.code}'`;
      const codePos = src.indexOf(codeToken);
      if (codePos === -1) throw new Error(`Cannot locate ${codeToken} in ${t.file}`);

      const optHeaderIdx = src.indexOf('options:', codePos);
      if (optHeaderIdx === -1) throw new Error(`Cannot locate options: after ${q.code}`);
      const openBracketIdx = src.indexOf('[', optHeaderIdx);
      const closeBracketIdx = findArrayEnd(src, openBracketIdx);

      const tailSlice = src.slice(closeBracketIdx, closeBracketIdx + 120);
      const caMatch = /,\s*\r?\n\s*correct_answer:\s*'[A-E]'/.exec(tailSlice);
      if (!caMatch) throw new Error(`Cannot locate correct_answer after options for ${q.code}`);
      const replaceEnd = closeBracketIdx + caMatch.index + caMatch[0].length;

      const formattedOpts = newOpts
        .map((o) => `      { key: '${o.key}', text: ${JSON.stringify(o.text)} }`)
        .join(',\n');
      const replacement = `options: [\n${formattedOpts}\n    ],\n    correct_answer: '${targetKey}'`;

      src = src.slice(0, optHeaderIdx) + replacement + src.slice(replaceEnd);
    }

    fs.writeFileSync(filePath, src, 'utf8');
    summary[t.file] = {
      A: targets.filter((x) => x === 'A').length,
      B: targets.filter((x) => x === 'B').length,
      C: targets.filter((x) => x === 'C').length,
      D: targets.filter((x) => x === 'D').length,
      E: targets.filter((x) => x === 'E').length,
    };
  }

  console.log('English options shuffled & balanced:', JSON.stringify(summary, null, 2));
}

shuffleTopics().catch((err) => {
  console.error('Shuffle error:', err);
  process.exit(1);
});
