import { Question } from '../Question';
import { StartQuestionnaire } from '../StartQuestionnaire';
import { EndQuestionnaire } from '../EndQuestionnaire';
import { FunctionComponent, useEffect, useState } from 'react';
import { useQuizReducer, quizActions } from '../Quiz/quizReducer';


interface IQuizProps {
  questions: any;
}

const Quiz: FunctionComponent<IQuizProps> = ({ questions }) => {
  const [quizState, quizActionDispatch] = useQuizReducer();

  useEffect(() => {
    quizActionDispatch({
      type: quizActions.setQuestions,
      payload: questions
    });
  }, [quizActionDispatch]);

  const setNextQuestion = (answer: number) => {
    quizActionDispatch({
      type: quizActions.setCurrentQuestion,
      payload: { newQuestion: quizState.currentQuestion + 1, answer }
    });
  };

  const setPreviousQuestion = (answer: number) => {
    quizActionDispatch({
      type: quizActions.setCurrentQuestion,
      payload: { newQuestion: quizState.currentQuestion - 1, answer }
    });
  };

  const setContestantName = (name: number) => {
    quizActionDispatch({
      type: quizActions.setContestantName,
      payload: name
    });
  };

  if (quizState.questions && quizState.currentQuestion > quizState.questions.length - 1) {
    return <EndQuestionnaire quizState={quizState} />;
  }
  if (!quizState.contestantName) {
    return <StartQuestionnaire setContestantName={setContestantName} />;
  }

  return (
    <>
      <Question
        question={quizState.questions[quizState.currentQuestion]}
        setNextQuestion={setNextQuestion}
        setPreviousQuestion={setPreviousQuestion}
        currentQuestion={quizState.currentQuestion}
      />
    </>
  );
};

export default Quiz;
