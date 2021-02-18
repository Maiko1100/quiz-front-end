import { Nav } from '../Nav';
// import styles from '../../styles/StartQuestionnaire.module.css';
import { useState, FunctionComponent, useEffect } from 'react';
import { Button, Input } from '@material-ui/core';
import { Question } from '../Question';
import quizActions, { IQuestion } from '../../api/quiz';
import quiz from '../../api/quiz';

interface IEndQuestionnaireProps {
  quizState: any;
}
export const EndQuestionnaire: FunctionComponent<IEndQuestionnaireProps> = ({ quizState }) => {
  const [saveQuizState, setSaveQuizState] = useState({ loading: false, success: false, error: '' });
  const [savedQuiz, setSavedQuiz] = useState<any>({ questions: [], name: '', correctAnswers: 0 });

  useEffect(() => {
    if (quizState.finishedQuiz && !saveQuizState.success && !saveQuizState.error && !saveQuizState.loading) {
      saveQuiz();
    }
  });

  const saveQuiz = async () => {
    try {
      setSaveQuizState({ loading: true, success: false, error: '' });
      const savedQuiz = await quizActions.saveQuiz({ questions: quizState.questions, name: quizState.contestantName });
      setSavedQuiz(savedQuiz);
      setSaveQuizState({ loading: false, success: true, error: '' });
    } catch (err) {
      setSaveQuizState({ loading: false, success: true, error: err.message });
    }
  };
  if (saveQuizState.loading) {
    return <div>Saving questionnaire...</div>;
  }
  if (saveQuizState.error) {
    return <div>something went wrong saving your questionnaire</div>;
  }
  return (
    <div>
      <span>You have finished your quiz!</span>
      <br />
      <span>
        You have {savedQuiz.correctAnswers} / {savedQuiz.questions.length} questions correct.
      </span>
      {savedQuiz.questions.map((question: IQuestion, index: number) => (
        <Question key={index} question={question} isPreview={true} />
      ))}
    </div>
  );
};
