import QuestionStyles from '../../styles/Question.module.css';
import { FunctionComponent, useState } from 'react';

interface IAnswerOptionProps {
  option: string;
  setSelectedOption: (index: number) => void;
  index: number;
  selectedOption: number;
  correctOption: number;
  isPreview: boolean;
}

export const AnswerOption: FunctionComponent<IAnswerOptionProps> = ({
  option,
  setSelectedOption,
  index,
  selectedOption,
  isPreview,
  correctOption
}) => {
  const getClass = () => {
    if (isPreview && index === selectedOption) {
      if (correctOption === selectedOption) {
        return `${QuestionStyles.correct}`;
      }
      if (selectedOption !== correctOption) {
        return `${QuestionStyles.inCorrect}`;
      }
    }
    return `${selectedOption === index && QuestionStyles.active}`;
  };

  return (
    <div
      onClick={() => {
        setSelectedOption(index);
      }}
      className={`${QuestionStyles.answerOption} ${getClass()}`}>
      {option}
    </div>
  );
};
