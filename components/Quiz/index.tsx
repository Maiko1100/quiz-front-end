import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Question } from '../Question';
import react, { FunctionComponent, useEffect, useState } from 'react';
import { useQuizReducer, quizActions } from '../Quiz/quizreducer';

interface IQuizProps {}

const quiz = {
  questions: [
    {
      text: 'Who invented JavaScript?',
      answerOptions: ['Douglas Crockford', 'Sheryl Sandberg', 'Brendan Eich'],
      correctAnswer: 1,
      answer: -1
    },
    {
      text: 'Who invented JavaScript 2?',
      answerOptions: ['Douglas Crockford', 'Sheryl Sandberg', 'Brendan Eich'],
      answer: -1
    }
  ]
};

const Quiz: FunctionComponent<IQuizProps> = () => {
  const [quizState, quizActionDispatch] = useQuizReducer();

  useEffect(() => {
    quizActionDispatch({
      type: quizActions.setQuestions,
      payload: quiz.questions
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

  if (quizState.currentQuestion > quizState.questions.length - 1) {
    return <div>endQuestionnaire</div>;
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
