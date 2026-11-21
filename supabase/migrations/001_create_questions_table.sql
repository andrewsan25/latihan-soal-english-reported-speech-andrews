-- =====================================================================
-- SUPABASE MIGRATION: 001_create_questions_table.sql
-- Project: Biologi (Bank Soal Biologi Kelas X - SAS Gasal)
-- =====================================================================

-- 1. Create questions table for Biologi Kelas X (SAS Gasal)
CREATE TABLE IF NOT EXISTS public.questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  subject text NOT NULL DEFAULT 'Biologi Kelas X',
  topic_slug text NOT NULL CHECK (
    topic_slug IN (
      'ruang-lingkup',
      'keanekaragaman-hayati',
      'klasifikasi',
      'virus',
      'bakteri'
    )
  ),
  topic_name text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('mudah', 'medium', 'sulit')),
  cognitive_level text NOT NULL CHECK (cognitive_level IN ('C1', 'C2', 'C3', 'C4', 'C5')),
  stimulus_type text NOT NULL DEFAULT 'none' CHECK (stimulus_type IN ('none', 'text', 'table', 'svg')),
  stimulus_content text NULL,
  question_text text NOT NULL,
  options jsonb NOT NULL,
  correct_answer text NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D', 'E')),
  hint text NOT NULL,
  explanation text NOT NULL,
  tags text[] NOT NULL DEFAULT '{}',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- 2. Indexes on filtered columns (topic_slug, difficulty, cognitive_level)
CREATE INDEX IF NOT EXISTS questions_topic_slug_idx ON public.questions (topic_slug);
CREATE INDEX IF NOT EXISTS questions_difficulty_idx ON public.questions (difficulty);
CREATE INDEX IF NOT EXISTS questions_cognitive_level_idx ON public.questions (cognitive_level);
CREATE INDEX IF NOT EXISTS questions_topic_diff_cog_idx ON public.questions (topic_slug, difficulty, cognitive_level);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- 4. Grant SELECT to anon and authenticated roles for Data API (PostgREST)
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON TABLE public.questions TO anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON TABLE public.questions FROM anon, authenticated;

-- 5. RLS Policy: public read-only (writes restricted to service_role only)
CREATE POLICY "questions_public_select"
  ON public.questions
  FOR SELECT
  TO anon, authenticated
  USING (true);
