import QuestionStyles from '../../styles/Question.module.css';
import { FunctionComponent, useEffect, useState } from 'react';
import { AnswerOption } from './answerOption';
import { Button } from '@material-ui/core';

interface IQuestionProps {
  question: any;
  setNextQuestion: any;
  setPreviousQuestion: any;
  currentQuestion: number;
}
export const Question: FunctionComponent<IQuestionProps> = ({ question, setNextQuestion, setPreviousQuestion, currentQuestion }) => {
  let [selectedOption, setSelectedOption] = useState<number>(question.answer);

  useEffect(() => {
    setSelectedOption(question.answer);
  }, [question]);
  
  return (
    <>
      <div className={QuestionStyles.questionContainer}>
        {question.text}
        <div className={QuestionStyles.answerOptionContainer}>
          {question.answerOptions.map((option: string, index: number) => (
            <AnswerOption key={index} setSelectedOption={setSelectedOption} option={option} index={index} selectedOption={selectedOption} />
          ))}
        </div>
      </div>
      <Button onClick={() => setNextQuestion(selectedOption)}>next</Button>
      {currentQuestion > 0 && <Button onClick={() => setPreviousQuestion(selectedOption)}>previous</Button>}
    </>
  );
};
