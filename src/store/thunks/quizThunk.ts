import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IFetchQuizProps {
  amount: string;
  category: string;
}

export const fetchQuiz = createAsyncThunk(
  'quiz/fetchQuiz',
  async ({ amount, category }: IFetchQuizProps, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=easy&type=multiple`
      );
      return data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e as Error);
    }
  }
);
