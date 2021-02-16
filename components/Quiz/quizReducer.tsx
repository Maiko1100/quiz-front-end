import { useReducer } from 'react';
import { IQuestion } from '../../api/quiz';

type quizState = {
  questions: IQuestion[];
  currentQuestion: number;
  contestantName: string;
  savedQuiz?: { questions: IQuestion[]; correctAnswers: number; name: string };
  saveQuizState: { loading: boolean; error: string; success: boolean };
};
const initialState = {
  questions: undefined,
  currentQuestion: 0,
  contestantName: '',
  savedQuiz: {},
  saveQuizState: { loading: false, error: '', success: false }
};

export const quizActions = {
  setQuestions: 'setQuestions',
  setCurrentQuestion: 'setCurrentQuestion',
  setContestantName: 'setContestantName',
  startSaveQuiz: 'startSaveQuiz',
  errorSaveQuiz: 'errorSaveQuiz',
  successSaveQuiz: 'successSaveQuiz'
};

const quizReducer = (state: quizState, action: any): any => {
  switch (action.type) {
    case quizActions.setQuestions:
      return {
        ...state,
        questions: action.payload
      };
    case quizActions.setCurrentQuestion:
      let newQuestions = [...state.questions];
      newQuestions[state.currentQuestion].answer = action.payload.answer;
      return {
        ...state,
        currentQuestion: action.payload.newQuestion,
        questions: newQuestions
      };
    case quizActions.setContestantName:
      return {
        ...state,
        contestantName: action.payload
      };
    case quizActions.startSaveQuiz:
      return {
        ...state,
        saveQuizState: { loading: true, error: '', success: false }
      };
    case quizActions.successSaveQuiz:
      return {
        ...state,
        saveQuizState: { loading: false, error: '', success: true },
        savedQuiz: action.payload
      };
    case quizActions.errorSaveQuiz:
      return {
        ...state,
        saveQuizState: { loading: false, error: action.payload, success: false }
      };
    default:
      return state;
  }
};

export const useQuizReducer = () => {
  return useReducer(quizReducer, initialState);
};
