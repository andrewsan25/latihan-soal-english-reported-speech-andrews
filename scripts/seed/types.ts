export type TopicSlug =
  | 'ruang-lingkup'
  | 'keanekaragaman-hayati'
  | 'klasifikasi'
  | 'virus'
  | 'bakteri';

export type Difficulty = 'mudah' | 'medium' | 'sulit';

export type CognitiveLevel = 'C1' | 'C2' | 'C3' | 'C4' | 'C5';

export type StimulusType = 'none' | 'text' | 'table' | 'svg';

export type AnswerKey = 'A' | 'B' | 'C' | 'D' | 'E';

export interface QuestionOption {
  key: AnswerKey;
  text: string;
}

export interface BiologyQuestionSeed {
  code: string;
  subject: string;
  topic_slug: TopicSlug;
  topic_name: string;
  difficulty: Difficulty;
  cognitive_level: CognitiveLevel;
  stimulus_type: StimulusType;
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
