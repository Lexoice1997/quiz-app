import { Box, Divider, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../helpers/hooks/redux';
import { shuffleArray } from '../../helpers/utils/shuffle';
import QuestionButtons from './QuestionButtons';

const Question = () => {
  const [shuffleAnswers, setShuffleAnswers] = useState<string[]>();
  const [selectAnswer, setSelectAnswer] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { question, currentQuestion, submitedQuestions } = useAppSelector(
    (state) => state.quizReducer
  );

  const handleListItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
    setSelectAnswer(event.target.innerText);
  };

  const handleShuffleAnswers = (): string[] => {
    const arr = [...question.incorrect_answers, question.correct_answer];
    shuffleArray(arr);
    return arr;
  };

  useEffect(() => {
    setShuffleAnswers(handleShuffleAnswers());
  }, [question]);

  return (
    <div className="question">
      <Typography variant="h5" sx={{ margin: 1 }}>
        {question?.question}
      </Typography>
      {submitedQuestions[currentQuestion] ? (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <List component="nav" aria-label="secondary">
            {shuffleAnswers?.map((item, index: number) => {
              return (
                <ListItemButton
                  key={item + index}
                  className={
                    selectedIndex === index + 1
                      ? item === question.correct_answer
                        ? 'green'
                        : 'red'
                      : item === question.correct_answer
                      ? 'green'
                      : ''
                  }
                  selected={selectedIndex === index + 1}
                  onClick={(event) => handleListItemClick(event, index + 1)}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      ) : (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <List component="nav" aria-label="secondary">
            {shuffleAnswers?.map((item, index: number) => {
              return (
                <div key={item + index}>
                  <Divider />
                  <ListItemButton
                    selected={selectedIndex === index + 1}
                    onClick={(event) => handleListItemClick(event, index + 1)}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                </div>
              );
            })}
          </List>
        </Box>
      )}

      <QuestionButtons selectAnswer={selectAnswer} />
    </div>
  );
};

export default Question;
