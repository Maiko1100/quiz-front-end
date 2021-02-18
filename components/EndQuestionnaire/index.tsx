import styles from '../../styles/EndQuestionnaire.module.css';
import { useState, FunctionComponent, useEffect } from 'react';
import { Question } from '../Question';
import quizActions, { IQuestion, ISavedQuiz } from '../../api/quiz';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import { IQuizState } from '../Quiz/quizReducer';

interface IEndQuestionnaireProps {
  quizState: IQuizState;
}
export const EndQuestionnaire: FunctionComponent<IEndQuestionnaireProps> = ({ quizState }) => {
  const [saveQuizState, setSaveQuizState] = useState({ loading: false, success: false, error: '' });
  const [savedQuiz, setSavedQuiz] = useState<ISavedQuiz>({
    questions: [],
    userName: '',
    correctAnswers: 0,
    created_at: '',
    _id: ''
  });
  const router = useRouter();

  useEffect(() => {
    if (quizState.finishedQuiz && !saveQuizState.success && !saveQuizState.error && !saveQuizState.loading) {
      saveQuiz();
    }
  }, [quizState.finishedQuiz, saveQuizState]);

  const redirect = (e: any, path: string) => {
    e.preventDefault();
    router.push(path);
  };

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
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <span>You have finished your quiz!</span>
        <br />
        <span>
          You have {savedQuiz.correctAnswers} / {savedQuiz.questions.length} questions correct.
        </span>
        <br />

        <Button style={{ marginTop: '1rem' }} onClick={(e) => redirect(e, '/highscores')}>
          Go to highscores
        </Button>
      </div>
      {savedQuiz.questions.map((question: IQuestion, index: number) => (
        <Question key={index} question={question} isPreview={true} />
      ))}
    </div>
  );
};
