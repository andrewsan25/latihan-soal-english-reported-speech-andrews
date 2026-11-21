import * as fs from 'fs';
import * as path from 'path';
import type { BiologyQuestionSeed } from './types.ts';
import { topic1RuangLingkup } from './data/topic1_ruang_lingkup.ts';
import { topic2Keanekaragaman } from './data/topic2_keanekaragaman.ts';
import { topic3Klasifikasi } from './data/topic3_klasifikasi.ts';
import { topic4Virus } from './data/topic4_virus.ts';
import { topic5Bakteri } from './data/topic5_bakteri.ts';

// Load .env.local manually or via dotenv if installed
function loadEnvLocal() {
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

export function getAllBiologyQuestions(): BiologyQuestionSeed[] {
  return [
    ...topic1RuangLingkup,
    ...topic2Keanekaragaman,
    ...topic3Klasifikasi,
    ...topic4Virus,
    ...topic5Bakteri,
  ];
}

export function validateQuestions(questions: BiologyQuestionSeed[]): void {
  const seenCodes = new Set<string>();
  const validKeys = ['A', 'B', 'C', 'D', 'E'];
  const validDifficulties = ['mudah', 'medium', 'sulit'];
  const validCognitive = ['C1', 'C2', 'C3', 'C4', 'C5'];
  const validTopics = [
    'ruang-lingkup',
    'keanekaragaman-hayati',
    'klasifikasi',
    'virus',
    'bakteri',
  ];

  questions.forEach((q, idx) => {
    if (!q.code || !q.code.trim()) {
      throw new Error(`Question at index ${idx} has empty code`);
    }
    if (seenCodes.has(q.code)) {
      throw new Error(`Duplicate question code detected: ${q.code}`);
    }
    seenCodes.add(q.code);

    if (!validTopics.includes(q.topic_slug)) {
      throw new Error(`Invalid topic_slug "${q.topic_slug}" on ${q.code}`);
    }
    if (!validDifficulties.includes(q.difficulty)) {
      throw new Error(`Invalid difficulty "${q.difficulty}" on ${q.code}`);
    }
    if (!validCognitive.includes(q.cognitive_level)) {
      throw new Error(`Invalid cognitive_level "${q.cognitive_level}" on ${q.code}`);
    }
    if (!Array.isArray(q.options) || q.options.length !== 5) {
      throw new Error(`Question ${q.code} must have exactly 5 options (A-E)`);
    }
    q.options.forEach((opt, i) => {
      if (opt.key !== validKeys[i]) {
        throw new Error(`Option ${i} of ${q.code} must have key "${validKeys[i]}", found "${opt.key}"`);
      }
      if (!opt.text || opt.text.trim().length < 2) {
        throw new Error(`Option ${opt.key} of ${q.code} has empty text`);
      }
    });
    if (!validKeys.includes(q.correct_answer)) {
      throw new Error(`Invalid correct_answer "${q.correct_answer}" on ${q.code}`);
    }
    if (!q.question_text || q.question_text.trim().length < 10) {
      throw new Error(`Question text too short on ${q.code}`);
    }
    if (!q.hint || q.hint.trim().length < 5) {
      throw new Error(`Hint is empty or too short on ${q.code}`);
    }
    if (!q.explanation || q.explanation.trim().length < 15) {
      throw new Error(`Explanation is empty or too short on ${q.code}`);
    }
    if (
      (q.stimulus_type === 'table' || q.stimulus_type === 'svg' || q.stimulus_type === 'text') &&
      (!q.stimulus_content || q.stimulus_content.trim().length < 10)
    ) {
      throw new Error(`Question ${q.code} has stimulus_type="${q.stimulus_type}" but missing stimulus_content`);
    }
  });
}

function printSummaryReport(questions: BiologyQuestionSeed[]) {
  console.log('\n=============================================================');
  console.log('📊 LAPORAN VALIDASI & DISTRIBUSI BANK SOAL BIOLOGI KELAS X');
  console.log('=============================================================');
  console.log(`Total Soal Valid : ${questions.length} soal unik (0 duplikasi)\n`);

  const byTopic: Record<string, { total: number; mudah: number; medium: number; sulit: number; tableSvg: number }> = {};
  for (const q of questions) {
    if (!byTopic[q.topic_slug]) {
      byTopic[q.topic_slug] = { total: 0, mudah: 0, medium: 0, sulit: 0, tableSvg: 0 };
    }
    byTopic[q.topic_slug].total++;
    byTopic[q.topic_slug][q.difficulty]++;
    if (q.stimulus_type === 'table' || q.stimulus_type === 'svg') {
      byTopic[q.topic_slug].tableSvg++;
    }
  }

  console.table(byTopic);
}

async function runSeed() {
  loadEnvLocal();
  const allQuestions = getAllBiologyQuestions();
  validateQuestions(allQuestions);
  printSummaryReport(allQuestions);

  // Also export compiled JSON for frontend/offline consumption
  const outJsonPath = path.resolve(process.cwd(), 'data', 'bank_soal_biologi_kelas_x.json');
  fs.mkdirSync(path.dirname(outJsonPath), { recursive: true });
  fs.writeFileSync(outJsonPath, JSON.stringify(allQuestions, null, 2), 'utf8');
  console.log(`✅ JSON Bank Soal tersimpan di: ${outJsonPath}`);

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.log(
      '\nℹ️ SUPABASE_URL atau SUPABASE_SERVICE_ROLE_KEY belum diset di .env.local. Validasi lokal & ekspor JSON berhasil 100%.'
    );
    return;
  }

  const tableName = process.env.SUPABASE_BIOLOGI_TABLE || 'questions';
  console.log(`\n🚀 Melakukan batch upsert (${allQuestions.length} soal) ke ${supabaseUrl}/rest/v1/${tableName}...`);
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
    console.log(`   ✔ Batch ${Math.floor(i / batchSize) + 1} selesai (${upsertedCount}/${allQuestions.length})`);
  }

  console.log(`\n🎉 SUKSES! Seluruh ${upsertedCount} soal Biologi Kelas X berhasil di-upsert ke Supabase.`);
}

runSeed().catch((err) => {
  console.error('❌ Error pada saat seeding:', err);
  process.exit(1);
});
