import QuizComponent from '../components/Quiz';
import quizActions from '../api/quiz';
import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface IQuizProps {
  questions: any;
}

const Quiz: FunctionComponent<IQuizProps> = ({ questions }) => {
  return (
    <>
      <Head>
        <title>Quiz App || Quiz</title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </Head>
      <QuizComponent questions={questions} />
    </>
  );
};

export default Quiz;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await quizActions.getQuiz('602a96f8a1c163c95b15438c');
    return { props: { questions: response.questions } };
  } catch (error) {
    return { props: { questions: [] } };
  }
};
