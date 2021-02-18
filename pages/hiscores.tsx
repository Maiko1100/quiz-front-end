import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
import quizActions, { ISavedQuiz } from '../api/quiz';
import HiscoresComponent from '../components/Hiscores';

interface IHiscoresProps {
  savedQuizzes: ISavedQuiz[];
}
const Hiscores: FunctionComponent<IHiscoresProps> = ({ savedQuizzes }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz App || Hiscores</title>
      </Head>
      <HiscoresComponent savedQuizzes={savedQuizzes} />
    </div>
  );
};
export default Hiscores;

export const getServerSideProps: GetStaticProps = async () => {
  try {
    const response = await quizActions.getAllSavedQuizzes();
    return { props: { savedQuizzes: response } };
  } catch (error) {
    return { props: { savedQuizzes: [] } };
  }
};
