import QuestionStyles from '../../styles/Question.module.css';
import { FunctionComponent, useEffect, useState } from 'react';
import { AnswerOption } from './answerOption';
import { Button } from '@material-ui/core';
import { IQuestion } from '../../api/quiz';
import classes from '../../styles/Question.module.css';

interface IQuestionProps {
  question: any;
  setNextQuestion?: any;
  setPreviousQuestion?: any;
  currentQuestion?: number;
  isPreview?: boolean;
}
export const Question: FunctionComponent<IQuestionProps> = ({
  question,
  setNextQuestion,
  setPreviousQuestion,
  currentQuestion,
  isPreview
}) => {
  let [selectedOption, setSelectedOption] = useState<number>(question.answer);

  useEffect(() => {
    setSelectedOption(question.answer);
  }, [question]);
  return (
    <div className={QuestionStyles.mainContainer}>
      <div className={`${QuestionStyles.questionContainer} ${isPreview && QuestionStyles.preview}`}>
        {question.text}
        <div className={QuestionStyles.answerOptionContainer}>
          {question.answerOptions.map((option: string, index: number) => (
            <AnswerOption
              key={index}
              isPreview={isPreview}
              setSelectedOption={setSelectedOption}
              option={option}
              index={index}
              selectedOption={selectedOption}
              correctOption={question.correctAnswer}
            />
          ))}
        </div>
      </div>
      <div className={classes.buttonContainer}>
        {!isPreview && (
          <Button style={{ visibility: currentQuestion > 0 ? 'visible' : 'hidden' }} onClick={() => setPreviousQuestion(selectedOption)}>
            Previous
          </Button>
        )}
        {!isPreview && (
          <Button disabled={selectedOption === undefined} onClick={() => setNextQuestion(selectedOption)}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};
