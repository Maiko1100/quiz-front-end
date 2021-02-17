import Quiz from '../components/Quiz';
import quizActions from '../api/quiz';
import { FunctionComponent } from 'react';

interface IQuizProps {
  questions: any;
}

const Quiz: FunctionComponent<IQuizProps> = ({ questions }) => {
  return (
    <>
      <Quiz questions={questions} />
    </>
  );
};

export default Quiz;

export const getStaticProps = async () => {
  const response = await quizActions.getQuiz('602a96f8a1c163c95b15438c');
  return { props: { questions: response.questions } };
};
