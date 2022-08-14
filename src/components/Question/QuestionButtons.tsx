import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { quizSlice } from '../../store/slices/quizSlice';
import MyButton from '../UI/MyButton';

interface IQuestionButtons {
  selectAnswer: any;
}

const QuestionButtons: FC<IQuestionButtons> = ({ selectAnswer }) => {
  const dispatch = useAppDispatch();
  const { results, question, currentQuestion, submitedQuestions } = useAppSelector(
    (state) => state.quizReducer
  );
  const { setNextQuestion, setPreviusQuestion, setSubmitedQuestions, setTotalCorrectAnswers } =
    quizSlice.actions;

  const handleCheckAnswer = () => {
    dispatch(
      setSubmitedQuestions([
        ...submitedQuestions.slice(0, currentQuestion),
        true,
        ...submitedQuestions.slice(currentQuestion + 1),
      ])
    );
    if (selectAnswer === question.correct_answer) {
      dispatch(setTotalCorrectAnswers(1));
    }
  };

  const handleNextQuestion = () => {
    dispatch(setNextQuestion());
  };

  const handlePreviusQuestion = () => {
    dispatch(setPreviusQuestion());
  };
  return (
    <div className="buttons">
      {currentQuestion <= 0 ? (
        <MyButton onClick={handlePreviusQuestion} disabled={true}>
          Previus
        </MyButton>
      ) : (
        <MyButton onClick={handlePreviusQuestion}>Previus</MyButton>
      )}
      {submitedQuestions[currentQuestion] ? (
        <MyButton onClick={handleCheckAnswer} disabled={true}>
          Submit
        </MyButton>
      ) : (
        <MyButton onClick={handleCheckAnswer}>Submit</MyButton>
      )}
      {currentQuestion >= results.length - 1 ? (
        <MyButton onClick={handleNextQuestion} disabled={true}>
          Next
        </MyButton>
      ) : (
        <MyButton onClick={handleNextQuestion}>Next</MyButton>
      )}
    </div>
  );
};

export default QuestionButtons;
