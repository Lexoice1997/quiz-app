import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/UI/MyButton';
import MySelect from '../components/UI/MySelect';
import { CATEGORIES, NUMBER_OF_QUESTIONS, QUIZ } from '../constants';
import { useAppDispatch } from '../helpers/hooks/redux';
import { fetchQuiz } from './../store/thunks/quizThunk';

const Main = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<string>('10');
  const [category, setCategory] = useState<string>('21');

  const handleClickStart = () => {
    dispatch(fetchQuiz({ amount, category }));
    navigate(`${QUIZ}`);
  };

  return (
    <div className="main-page">
      <MySelect
        labelId="mainLabel"
        selectId="selectSelect"
        labelName="Number of Questions"
        selectVariant="standard"
        items={NUMBER_OF_QUESTIONS}
        value={amount}
        setValue={setAmount}
      />
      <MySelect
        labelId="mainLabel"
        selectId="selectSelect"
        labelName="Select Category"
        selectVariant="standard"
        items={CATEGORIES}
        value={category}
        setValue={setCategory}
      />
      <MyButton onClick={handleClickStart}>Начать</MyButton>
    </div>
  );
};

export default Main;
