import { useReducer } from 'react';

type quizState = {
  questions: any;
  currentQuestion: number;
};
const initialState = {
  questions: [],
  currentQuestion: 0
};

export const quizActions = {
  setQuestions: 'setQuestions',
  setCurrentQuestion: 'setCurrentQuestion'
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
    default:
      return state;
  }
};

export const useQuizReducer = () => {
  return useReducer(quizReducer, initialState);
};
