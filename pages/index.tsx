import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FunctionComponent } from 'react';

const Home: FunctionComponent<{}> = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz app</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      </Head>
      <div>Start Quiz</div>
      <div>Show hiscores</div>
    </div>
  );
};
export default Home;
