import { Box, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import Question from '../components/Question/Quesiton';
import QuestionsPagination from '../components/QuestionsPagination/QuestionsPagination';
import MyProgress from '../components/UI/MyProgress';
import { useAppDispatch, useAppSelector } from '../helpers/hooks/redux';
import { quizSlice } from '../store/slices/quizSlice';

const Quiz = () => {
  const dispatch = useAppDispatch();
  const { setSubmitedQuestions } = quizSlice.actions;
  const { results, isLoading, error } = useAppSelector((state) => state.quizReducer);

  useEffect(() => {
    const arr = [];
    if (results.length > 0) {
      for (let i = 1; i <= results.length; i++) {
        arr.push(false);
      }
    }

    dispatch(setSubmitedQuestions(arr));
  }, [dispatch, results]);

  if (isLoading) {
    return <MyProgress />;
  }

  if (error) {
    return <h1>Ups...</h1>;
  }

  return (
    <div className="quiz">
      <QuestionsPagination />
      <Question />
    </div>
  );
};

export default Quiz;
