import { IncorrectAnswer } from "./incorrectAnswer";

export type Result = {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrectAnswers: IncorrectAnswer[],
}