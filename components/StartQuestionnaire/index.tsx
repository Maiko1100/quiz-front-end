import { Nav } from '../Nav';
// import styles from '../../styles/StartQuestionnaire.module.css';
import { useState, FunctionComponent } from 'react';
import { Button, Input } from '@material-ui/core';

interface IStartQuestionnaireProps {
  setContestantName: any;
}
export const StartQuestionnaire: FunctionComponent<IStartQuestionnaireProps> = ({ setContestantName }) => {
  const [name, setName] = useState('');

  return (
    <>
      <div>Fill in your name to start the quiz!</div>
      <Input name="name" onChange={(e) => setName(e.target.value)}></Input>
      <Button onClick={() => setContestantName(name)}>Start </Button>
    </>
  );
};
