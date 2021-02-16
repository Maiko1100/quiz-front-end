import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Quiz from '../components/Quiz';
import quizActions from '../api/quiz';
import react, { FunctionComponent, useEffect, useState } from 'react';

interface IHomeProps {
  questions: any;
}

const Home: FunctionComponent<IHomeProps> = ({ questions }) => {
  return (
    <>
      <Quiz questions={questions} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await quizActions.getQuiz('602a96f8a1c163c95b15438c');
  return { props: { questions: response.questions } };
};
