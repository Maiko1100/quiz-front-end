import styles from '../../styles/StartQuestionnaire.module.css';
import { useState, FunctionComponent } from 'react';
import { TextField, Button } from '@material-ui/core';

interface IStartQuestionnaireProps {
  setContestantName: (name: string) => void;
}
export const StartQuestionnaire: FunctionComponent<IStartQuestionnaireProps> = ({ setContestantName }) => {
  const [name, setName] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.text}>Fill in your name to start the quiz!</div>
      <TextField style={{ marginBottom: '1rem' }} name="name" label="Name" onChange={(e) => setName(e.target.value)} />

      <Button onClick={() => setContestantName(name)}>Start </Button>
    </div>
  );
};
