export type EnglishTopicSlug =
  | 'reading-narrative-recount'
  | 'announcements'
  | 'parts-of-speech-modals'
  | 'verb-tenses'
  | 'reported-speech'
  | 'imperatives-questions';

export type EnglishDifficulty = 'mudah' | 'medium' | 'sulit';

export type EnglishCognitiveLevel = 'C1' | 'C2' | 'C3' | 'C4' | 'C5';

export type EnglishStimulusType = 'none' | 'text' | 'announcement' | 'table' | 'html';

export type AnswerKey = 'A' | 'B' | 'C' | 'D' | 'E';

export interface QuestionOption {
  key: AnswerKey;
  text: string;
}

export interface EnglishQuestionSeed {
  code: string;
  subject: string;
  topic_slug: EnglishTopicSlug;
  topic_name: string;
  difficulty: EnglishDifficulty;
  cognitive_level: EnglishCognitiveLevel;
  stimulus_type: EnglishStimulusType;
  stimulus_content: string | null;
  question_text: string;
  options: [
    QuestionOption,
    QuestionOption,
    QuestionOption,
    QuestionOption,
    QuestionOption
  ];
  correct_answer: AnswerKey;
  hint: string;
  explanation: string;
  tags: string[];
}
