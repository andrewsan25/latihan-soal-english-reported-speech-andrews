import * as fs from 'fs';
import * as path from 'path';
import type { AnswerKey, EnglishQuestionSeed } from './types.ts';
import { topic1ReadingTexts } from './data/topic1_reading_texts.ts';
import { topic2Announcements } from './data/topic2_announcements.ts';
import { topic3PosModals } from './data/topic3_pos_modals.ts';
import { topic4VerbTenses } from './data/topic4_verb_tenses.ts';
import { topic5ReportedSpeech } from './data/topic5_reported_speech.ts';
import { topic6ImperativesQuestions } from './data/topic6_imperatives_questions.ts';

function loadEnvLocal(): void {
  const envPaths = [
    path.resolve(process.cwd(), '.env.local'),
    path.resolve(process.cwd(), '.env'),
    path.resolve(process.cwd(), 'reported-speech-quiz-site', '.env.local'),
    path.resolve(process.cwd(), 'reported-speech-quiz-site', '.env'),
  ];
  for (const p of envPaths) {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      for (const line of content.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx > 0) {
          const key = trimmed.slice(0, eqIdx).trim();
          const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
          if (!process.env[key]) process.env[key] = val;
        }
      }
    }
  }
}

export function getAllEnglishQuestions(): EnglishQuestionSeed[] {
  return [
    ...topic1ReadingTexts,
    ...topic2Announcements,
    ...topic3PosModals,
    ...topic4VerbTenses,
    ...topic5ReportedSpeech,
    ...topic6ImperativesQuestions,
  ];
}

export function validateEnglishQuestions(questions: EnglishQuestionSeed[]): void {
  if (questions.length < 200) {
    throw new Error(`Expected >200 questions, got ${questions.length}`);
  }

  const seenCodes = new Set<string>();
  const seenPrompts = new Set<string>();
  const validKeys: AnswerKey[] = ['A', 'B', 'C', 'D', 'E'];
  const validDifficulties = ['mudah', 'medium', 'sulit'];
  const validCognitive = ['C1', 'C2', 'C3', 'C4', 'C5'];
  const validTopics = [
    'reading-narrative-recount',
    'announcements',
    'parts-of-speech-modals',
    'verb-tenses',
    'reported-speech',
    'imperatives-questions',
  ];
  const validStimulusTypes = ['none', 'text', 'announcement', 'table', 'html'];
  const letterRefPattern = /\b(pilihan|opsi|option|answer)\s+[A-E]\b|\ball of the above\b|\bnone of the above\b|\bsemua\s+(benar|salah)\b/i;

  questions.forEach((q, idx) => {
    if (!q.code || !q.code.trim()) {
      throw new Error(`Question at index ${idx} has empty code`);
    }
    if (seenCodes.has(q.code)) {
      throw new Error(`Duplicate question code detected: ${q.code}`);
    }
    seenCodes.add(q.code);

    const promptKey = `${q.stimulus_content || ''}::${q.question_text.trim()}`;
    if (seenPrompts.has(promptKey)) {
      throw new Error(`Duplicate stimulus + question_text detected on ${q.code}`);
    }
    seenPrompts.add(promptKey);

    if (!validTopics.includes(q.topic_slug)) {
      throw new Error(`Invalid topic_slug "${q.topic_slug}" on ${q.code}`);
    }
    if (!validDifficulties.includes(q.difficulty)) {
      throw new Error(`Invalid difficulty "${q.difficulty}" on ${q.code}`);
    }
    if (!validCognitive.includes(q.cognitive_level)) {
      throw new Error(`Invalid cognitive_level "${q.cognitive_level}" on ${q.code}`);
    }
    if (!validStimulusTypes.includes(q.stimulus_type)) {
      throw new Error(`Invalid stimulus_type "${q.stimulus_type}" on ${q.code}`);
    }
    if (!Array.isArray(q.options) || q.options.length !== 5) {
      throw new Error(`Question ${q.code} must have exactly 5 options (A-E)`);
    }

    const optTexts = new Set<string>();
    q.options.forEach((opt, i) => {
      if (opt.key !== validKeys[i]) {
        throw new Error(`Option ${i} of ${q.code} must have key "${validKeys[i]}", found "${opt.key}"`);
      }
      if (!opt.text || opt.text.trim().length < 1) {
        throw new Error(`Option ${opt.key} of ${q.code} has empty text`);
      }
      if (letterRefPattern.test(opt.text)) {
        throw new Error(`Option ${opt.key} of ${q.code} references fixed option letters/order: ${opt.text}`);
      }
      if (optTexts.has(opt.text.trim())) {
        throw new Error(`Duplicate option text in ${q.code}: "${opt.text}"`);
      }
      optTexts.add(opt.text.trim());
    });

    if (!validKeys.includes(q.correct_answer)) {
      throw new Error(`Invalid correct_answer "${q.correct_answer}" on ${q.code}`);
    }
    if (!q.question_text || q.question_text.trim().length < 8) {
      throw new Error(`Question text too short on ${q.code}`);
    }
    if (!q.hint || q.hint.trim().length < 5 || letterRefPattern.test(q.hint)) {
      throw new Error(`Invalid hint on ${q.code}`);
    }
    if (!q.explanation || q.explanation.trim().length < 12) {
      throw new Error(`Explanation is empty or too short on ${q.code}`);
    }
    if (
      q.stimulus_type !== 'none' &&
      (!q.stimulus_content || q.stimulus_content.trim().length < 10)
    ) {
      throw new Error(`Question ${q.code} has stimulus_type="${q.stimulus_type}" but missing stimulus_content`);
    }
  });
}

function sqlLiteral(val: string | null): string {
  if (val === null) return 'NULL';
  return "'" + String(val).replace(/'/g, "''") + "'";
}

function sqlTextArray(arr: string[]): string {
  return 'ARRAY[' + arr.map((x) => sqlLiteral(x)).join(', ') + ']::text[]';
}

function buildSqlSeed(questions: EnglishQuestionSeed[]): string {
  const rows = questions.map((q) => {
    const optsJson = JSON.stringify(q.options);
    return `  (${sqlLiteral(q.code)}, ${sqlLiteral(q.subject)}, ${sqlLiteral(q.topic_slug)}, ${sqlLiteral(q.topic_name)}, ${sqlLiteral(q.difficulty)}, ${sqlLiteral(q.cognitive_level)}, ${sqlLiteral(q.stimulus_type)}, ${sqlLiteral(q.stimulus_content)}, ${sqlLiteral(q.question_text)}, ${sqlLiteral(optsJson)}::jsonb, ${sqlLiteral(q.correct_answer)}, ${sqlLiteral(q.hint)}, ${sqlLiteral(q.explanation)}, ${sqlTextArray(q.tags)})`;
  });

  return (
    `INSERT INTO public.english_sas_questions (code, subject, topic_slug, topic_name, difficulty, cognitive_level, stimulus_type, stimulus_content, question_text, options, correct_answer, hint, explanation, tags)\nVALUES\n` +
    rows.join(',\n') +
    `\nON CONFLICT (code) DO UPDATE SET\n` +
    `  subject = EXCLUDED.subject,\n` +
    `  topic_slug = EXCLUDED.topic_slug,\n` +
    `  topic_name = EXCLUDED.topic_name,\n` +
    `  difficulty = EXCLUDED.difficulty,\n` +
    `  cognitive_level = EXCLUDED.cognitive_level,\n` +
    `  stimulus_type = EXCLUDED.stimulus_type,\n` +
    `  stimulus_content = EXCLUDED.stimulus_content,\n` +
    `  question_text = EXCLUDED.question_text,\n` +
    `  options = EXCLUDED.options,\n` +
    `  correct_answer = EXCLUDED.correct_answer,\n` +
    `  hint = EXCLUDED.hint,\n` +
    `  explanation = EXCLUDED.explanation,\n` +
    `  tags = EXCLUDED.tags;\n`
  );
}

function printSummaryReport(questions: EnglishQuestionSeed[]): void {
  console.log('\n=======================================================================');
  console.log('LAPORAN VALIDASI & DISTRIBUSI BANK SOAL BAHASA INGGRIS SAS KELAS X');
  console.log('=======================================================================');
  console.log(`Total Soal Valid : ${questions.length} soal unik (0 duplikasi)\n`);

  const byTopic: Record<
    string,
    { total: number; mudah: number; medium: number; sulit: number; A: number; B: number; C: number; D: number; E: number }
  > = {};

  for (const q of questions) {
    if (!byTopic[q.topic_slug]) {
      byTopic[q.topic_slug] = { total: 0, mudah: 0, medium: 0, sulit: 0, A: 0, B: 0, C: 0, D: 0, E: 0 };
    }
    byTopic[q.topic_slug].total++;
    byTopic[q.topic_slug][q.difficulty]++;
    byTopic[q.topic_slug][q.correct_answer]++;
  }

  console.table(byTopic);
}

async function runSeedEnglish(): Promise<void> {
  loadEnvLocal();
  const allQuestions = getAllEnglishQuestions();
  validateEnglishQuestions(allQuestions);
  printSummaryReport(allQuestions);

  const rootDir = fs.existsSync(path.resolve(process.cwd(), 'data'))
    ? process.cwd()
    : path.resolve(process.cwd(), 'reported-speech-quiz-site');

  const outJsonPath = path.resolve(rootDir, 'data', 'bank_soal_sas_english_x.json');
  const outSqlPath = path.resolve(rootDir, 'data', 'seed_bank_soal_sas_english_x.sql');
  fs.mkdirSync(path.dirname(outJsonPath), { recursive: true });
  fs.writeFileSync(outJsonPath, JSON.stringify(allQuestions, null, 2) + '\n', 'utf8');
  fs.writeFileSync(outSqlPath, buildSqlSeed(allQuestions), 'utf8');
  console.log(`JSON exported: ${outJsonPath}`);
  console.log(`SQL exported : ${outSqlPath}`);

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.log('\nSUPABASE_URL atau SUPABASE_SERVICE_ROLE_KEY belum diset di .env.local. Validasi lokal & ekspor JSON/SQL berhasil 100%.');
    return;
  }

  const tableName = process.env.SUPABASE_ENGLISH_TABLE || 'english_sas_questions';
  console.log(`\nBatch upsert (${allQuestions.length} soal) ke ${supabaseUrl}/rest/v1/${tableName}...`);
  const batchSize = 35;
  let upsertedCount = 0;

  for (let i = 0; i < allQuestions.length; i += batchSize) {
    const batch = allQuestions.slice(i, i + batchSize);
    const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}?on_conflict=code`, {
      method: 'POST',
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates,return=minimal',
      },
      body: JSON.stringify(batch),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gagal upsert batch ${i / batchSize + 1}: HTTP ${response.status} - ${errText}`);
    }
    upsertedCount += batch.length;
    console.log(`   Batch ${Math.floor(i / batchSize) + 1} selesai (${upsertedCount}/${allQuestions.length})`);
  }

  console.log(`\nSUKSES! Seluruh ${upsertedCount} soal SAS Bahasa Inggris Kelas X berhasil di-upsert ke Supabase.`);
}

runSeedEnglish().catch((err) => {
  console.error('Error pada saat seeding Bahasa Inggris:', err);
  process.exit(1);
});
