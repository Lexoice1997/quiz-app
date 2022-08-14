export interface IQuiz {
  category: string;
  type: string;
  difficulty: string;
  incorrect_answers: string[];
  correct_answer: string;
  question: string;
}
