-- =====================================================================
-- SUPABASE MIGRATION: 002_create_english_sas_questions_table.sql
-- Bank Soal SAS Bahasa Inggris Kelas X (230 Soal Terstruktur)
-- =====================================================================

CREATE TABLE IF NOT EXISTS public.english_sas_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  subject text NOT NULL DEFAULT 'Bahasa Inggris Kelas X',
  topic_slug text NOT NULL CHECK (
    topic_slug IN (
      'reading-narrative-recount',
      'announcements',
      'parts-of-speech-modals',
      'verb-tenses',
      'reported-speech',
      'imperatives-questions'
    )
  ),
  topic_name text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('mudah', 'medium', 'sulit')),
  cognitive_level text NOT NULL CHECK (cognitive_level IN ('C1', 'C2', 'C3', 'C4', 'C5')),
  stimulus_type text NOT NULL DEFAULT 'none' CHECK (stimulus_type IN ('none', 'text', 'announcement', 'table', 'html')),
  stimulus_content text NULL,
  question_text text NOT NULL,
  options jsonb NOT NULL,
  correct_answer text NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D', 'E')),
  hint text NOT NULL,
  explanation text NOT NULL,
  tags text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes on frequently filtered columns
CREATE INDEX IF NOT EXISTS english_sas_questions_topic_slug_idx
  ON public.english_sas_questions (topic_slug);
CREATE INDEX IF NOT EXISTS english_sas_questions_difficulty_idx
  ON public.english_sas_questions (difficulty);
CREATE INDEX IF NOT EXISTS english_sas_questions_topic_diff_idx
  ON public.english_sas_questions (topic_slug, difficulty);

-- Enable Row Level Security (RLS)
ALTER TABLE public.english_sas_questions ENABLE ROW LEVEL SECURITY;

-- Public read-only access via PostgREST
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON TABLE public.english_sas_questions TO anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON TABLE public.english_sas_questions FROM anon, authenticated;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'english_sas_questions'
      AND policyname = 'english_sas_questions_public_select'
  ) THEN
    CREATE POLICY "english_sas_questions_public_select"
      ON public.english_sas_questions
      FOR SELECT
      TO anon, authenticated
      USING (true);
  END IF;
END $$;
