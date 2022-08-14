import { useAppDispatch, useAppSelector } from '../helpers/hooks/redux';
import { quizSlice } from '../store/slices/quizSlice';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Result = () => {
  const dispatch = useAppDispatch();
  const { setFinish } = quizSlice.actions;
  const { totalCorrectAnswers, results } = useAppSelector((state) => state.quizReducer);

  useEffect(() => {
    dispatch(setFinish());
  }, [dispatch]);

  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h5" component="h2" align="center">
        Your Results
      </Typography>
      <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
        {totalCorrectAnswers}/{results.length}
      </Typography>
    </Box>
  );
};

export default Result;
