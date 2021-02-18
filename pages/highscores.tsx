import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
import quizActions, { ISavedQuiz } from '../api/quiz';
import HighscoresComponent from '../components/Highscores';

interface IHighscoresProps {
  savedQuizzes: ISavedQuiz[];
}
const Highscores: FunctionComponent<IHighscoresProps> = ({ savedQuizzes }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz App || Highscores</title>
      </Head>
      <HighscoresComponent savedQuizzes={savedQuizzes} />
    </div>
  );
};
export default Highscores;

export const getServerSideProps: GetStaticProps = async () => {
  try {
    const response = await quizActions.getAllSavedQuizzes();
    return { props: { savedQuizzes: response } };
  } catch (error) {
    return { props: { savedQuizzes: [] } };
  }
};
