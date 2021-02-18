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
export interface ISavedQuiz {
  questions: IQuestion[];
  _id: string;
  userName: string;
  correctAnswers: number;
  created_at: string;
  updatedAt?: string;
}
export default {
  getQuiz: async (id: string): Promise<IQuizResponse> => {
    const response = await axios.get<IQuizResponse>(`/quiz/${id}`);
    return response.data;
  },
  saveQuiz: async ({ questions, name }: { questions: IQuestion[]; name: string }): Promise<ISavedQuiz> => {
    const response = await axios.post<ISavedQuiz>(`/quiz/save-quiz/`, { questions, name });
    return response.data;
  },
  getAllSavedQuizzes: async (): Promise<ISavedQuiz[]> => {
    const response = await axios.get<ISavedQuiz[]>(`/saved-quiz/`);
    return response.data;
  }
};
