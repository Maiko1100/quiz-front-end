import { useReducer } from 'react';

type quizState = {
  questions: any;
  currentQuestion: number;
  contestantName: string;
};
const initialState = {
  questions: [],
  currentQuestion: 0,
  contestantName: ''
};

export const quizActions = {
  setQuestions: 'setQuestions',
  setCurrentQuestion: 'setCurrentQuestion',
  setContestantName: 'setContestantName'
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
    default:
      return state;
  }
};

export const useQuizReducer = () => {
  return useReducer(quizReducer, initialState);
};
