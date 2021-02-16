import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Quiz from '../components/Quiz';
import react, { FunctionComponent, useEffect, useState } from 'react';

const Home: FunctionComponent<{}> = () => {
  return (
    <>
      <Quiz />
    </>
  );
};

export default Home;
