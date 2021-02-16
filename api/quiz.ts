import axios from './index';

export interface IQuizResponse {
  questions: IQuestion[];
  id: string;
}
export interface IAnswerOption {
  text: string;
}
export interface IQuestion {
  id: string;
  text: string;
  answerOptions: IAnswerOption[];
}
export default {
  getQuiz: async (id: string): Promise<IQuizResponse> => {
    const response = await axios.get<IQuizResponse>(`/quiz/${id}`);
    return response.data;
  }
};
