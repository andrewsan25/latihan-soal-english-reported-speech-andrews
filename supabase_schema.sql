-- =====================================================================
-- SUPABASE DATABASE SCHEMA: MULTI-SUBJECT QUIZ STUDIO & BANK SOAL SAS
-- Project ID: bgqhdqmgdvdiebxlpyhc (Bahasa Indonesia)
-- Project URL: https://bgqhdqmgdvdiebxlpyhc.supabase.co
-- =====================================================================

-- 1. Create bank_soal_sas table for 100 HOTS SAS Bahasa Indonesia questions
CREATE TABLE IF NOT EXISTS public.bank_soal_sas (
  id integer PRIMARY KEY,
  mata_pelajaran text NOT NULL DEFAULT 'Bahasa Indonesia',
  kategori text NOT NULL CHECK (kategori IN ('Teks LHO', 'Teks Anekdot', 'Teks Hikayat')),
  tingkat_kesulitan text NOT NULL DEFAULT 'HOTS (C4 - Analisis)',
  stimulus text NOT NULL,
  pertanyaan text NOT NULL,
  opsi jsonb NOT NULL,
  kunci_jawaban text NOT NULL CHECK (kunci_jawaban IN ('A', 'B', 'C', 'D', 'E')),
  pembahasan text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS bank_soal_sas_kategori_idx ON public.bank_soal_sas (kategori);
ALTER TABLE public.bank_soal_sas ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON TABLE public.bank_soal_sas TO anon, authenticated;

CREATE POLICY "bank_soal_sas_public_read"
  ON public.bank_soal_sas FOR SELECT TO anon, authenticated USING (true);

-- 2. Create subjects table for the 16 school subjects
CREATE TABLE IF NOT EXISTS public.subjects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  color text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 3. Create questions table supporting Types A-F and Difficulties 1-3 across all 16 subjects
CREATE TABLE IF NOT EXISTS public.questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id uuid NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  subject_slug text NOT NULL,
  question_type text NOT NULL DEFAULT 'A' CHECK (question_type IN ('A', 'B', 'C', 'D', 'E', 'F')),
  difficulty integer NOT NULL DEFAULT 1 CHECK (difficulty IN (1, 2, 3)),
  topic text NOT NULL DEFAULT 'Umum',
  prompt text NOT NULL,
  options jsonb NOT NULL DEFAULT '[]'::jsonb,
  correct_index integer NOT NULL DEFAULT 0,
  explanation text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 4. Create quiz_attempts table for storing user scores and progress per subject
CREATE TABLE IF NOT EXISTS public.quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id uuid NOT NULL REFERENCES public.subjects(id) ON DELETE CASCADE,
  subject_slug text NOT NULL,
  question_type text NOT NULL DEFAULT 'M',
  difficulty integer NOT NULL DEFAULT 0,
  player_name text NOT NULL DEFAULT 'Siswa',
  score integer NOT NULL CHECK (score >= 0 AND score <= 100),
  correct_count integer NOT NULL DEFAULT 0,
  total_questions integer NOT NULL DEFAULT 0,
  duration_seconds integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
