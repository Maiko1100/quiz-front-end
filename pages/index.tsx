import styles from '../styles/Home.module.css';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
interface IHome {
  setContestantName: (name: string) => void;
}
const Home: FunctionComponent<IHome> = () => {
  const router = useRouter();

  const redirect = (e: any, path: string) => {
    e.preventDefault();
    router.push(path);
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div onClick={(e) => redirect(e, '/quiz')} className={styles.button}>
          <Image src="/quiz.jpg" alt="me" width="200" height="200" />
          <span className={styles.text}>Start quiz</span>
        </div>
        <div onClick={(e) => redirect(e, '/highscores')} className={styles.button}>
          <Image src="/highscores.png" alt="me" width="200" height="200" />
          <span className={styles.text}>Show highscores</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
