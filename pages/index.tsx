import styles from '../styles/Home.module.css';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: FunctionComponent<{}> = () => {
  const router = useRouter();

  const redirect = (e: any, path: string) => {
    e.preventDefault();
    router.push(path);
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div onClick={(e) => redirect(e, '/quiz')} className={styles.button}>
          Start quiz
        </div>
        <div onClick={(e) => redirect(e, '/hiscores')} className={styles.button}>
          Show hiscores
        </div>
      </div>
    </div>
  );
};
export default Home;
