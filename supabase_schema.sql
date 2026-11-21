-- =====================================================================
-- SUPABASE DATABASE SCHEMA: MULTI-SUBJECT QUIZ STUDIO (16 MATA PELAJARAN)
-- Project ID: bgqhdqmgdvdiebxlpyhc
-- Project URL: https://bgqhdqmgdvdiebxlpyhc.supabase.co
-- =====================================================================

-- 1. Create subjects table for the 16 school subjects
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

-- 2. Create questions table supporting Types A-F and Difficulties 1-3 across all 16 subjects
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

-- 3. Create quiz_attempts table for storing user scores and progress per subject
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

-- 4. Indexes on foreign keys and frequently filtered columns
CREATE INDEX IF NOT EXISTS subjects_display_order_idx ON public.subjects (display_order);
CREATE INDEX IF NOT EXISTS questions_subject_id_idx ON public.questions (subject_id);
CREATE INDEX IF NOT EXISTS questions_subject_slug_filter_idx ON public.questions (subject_slug, question_type, difficulty);
CREATE INDEX IF NOT EXISTS quiz_attempts_subject_id_idx ON public.quiz_attempts (subject_id);
CREATE INDEX IF NOT EXISTS quiz_attempts_subject_slug_score_idx ON public.quiz_attempts (subject_slug, score DESC, created_at DESC);

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;

-- 6. Grant table permissions for Data API (PostgREST)
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON TABLE public.subjects TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.questions TO anon, authenticated;
GRANT SELECT, INSERT ON TABLE public.quiz_attempts TO anon, authenticated;

-- 7. RLS Policies
CREATE POLICY "subjects_public_read"
  ON public.subjects FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "questions_public_read"
  ON public.questions FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "questions_public_insert"
  ON public.questions FOR INSERT TO anon, authenticated
  WITH CHECK (
    question_type IN ('A', 'B', 'C', 'D', 'E', 'F')
    AND difficulty IN (1, 2, 3)
    AND char_length(prompt) > 3
  );

CREATE POLICY "quiz_attempts_public_read"
  ON public.quiz_attempts FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "quiz_attempts_public_insert"
  ON public.quiz_attempts FOR INSERT TO anon, authenticated
  WITH CHECK (score >= 0 AND score <= 100 AND total_questions > 0);
