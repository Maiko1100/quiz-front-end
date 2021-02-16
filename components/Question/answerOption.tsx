import QuestionStyles from '../../styles/Question.module.css';
import { FunctionComponent, useState } from 'react';

interface IAnswerOptionProps {
  option: string;
  setSelectedOption: any;
  index: number;
  selectedOption: number;
  correctOption: number;
}

export const AnswerOption: FunctionComponent<IAnswerOptionProps> = ({ option, setSelectedOption, index, selectedOption }) => {
  return (
    <div
      onClick={() => {
        setSelectedOption(index);
      }}
      className={`${QuestionStyles.answerOption} ${selectedOption === index && QuestionStyles.active}`}>
      {option}
    </div>
  );
};
