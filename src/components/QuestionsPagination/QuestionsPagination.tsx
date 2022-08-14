import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FINISH } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/redux';
import { quizSlice } from '../../store/slices/quizSlice';
import { IQuiz } from '../../types/quiz';
import MyButton from '../UI/MyButton';

const QuestionsPagination = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setQuestion, setCurrentQuestion } = quizSlice.actions;
  const { results, question, currentQuestion, totalCorrectAnswers } = useAppSelector(
    (state) => state.quizReducer
  );

  const handleFinish = () => {
    navigate(`${FINISH}`);
  };

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: IQuiz) => {
    dispatch(setQuestion(newAlignment));
  };

  return (
    <>
      <div className="question-paginate">
        <Typography variant="h5" align="center">
          {currentQuestion + 1}/{results.length}
        </Typography>

        <div className="results">
          <Typography variant="h5" align="center">
            {totalCorrectAnswers}/{results.length}
          </Typography>
          <MyButton onClick={handleFinish}>Finish</MyButton>
        </div>
      </div>

      <ToggleButtonGroup
        color="standard"
        value={question}
        exclusive
        onChange={handleChange}
        className="questions-pagination"
      >
        {results?.map((item, index) => {
          return (
            <ToggleButton
              key={index}
              value={item}
              size="large"
              sx={{ width: 65, marginBottom: 2 }}
              onClick={() => dispatch(setCurrentQuestion(index))}
            >
              {index + 1}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </>
  );
};

export default QuestionsPagination;
