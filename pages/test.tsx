import Head from 'next/head';
import styles from '../styles/Home.module.css';
import react, { FunctionComponent } from 'react';

interface ITestProps {}
const Test: FunctionComponent<ITestProps> = () => {
  return <div className={styles.container}>tester</div>;
};

export default Test;
