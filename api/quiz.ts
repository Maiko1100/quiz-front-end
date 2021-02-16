import axios from './index';

export interface IQuizResponse {
  questions: IQuestion[];
  id: string;
}
export interface IAnswerOption {
  option: string;
}
export interface IQuestion {
  text: string;
  answerOptions: IAnswerOption[];
  correctAnswer: number;
  answer?: number;
}
export default {
  getQuiz: async (id: string): Promise<IQuizResponse> => {
    const response = await axios.get<IQuizResponse>(`/quiz/${id}`);
    return response.data;
  },
  saveQuiz: async ({ questions, name }: { questions: IQuestion[]; name: string }): Promise<IQuizResponse> => {
    const response = await axios.post<IQuizResponse>(`/quiz/saveQuiz`, { questions, name });
    return response.data;
  }
};
