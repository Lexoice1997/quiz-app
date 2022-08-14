import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuiz } from '../../types/quiz';
import { fetchQuiz } from '../thunks/quizThunk';

interface IQuizState {
  question: IQuiz;
  results: IQuiz[];
  currentQuestion: number;
  submitedQuestions: boolean[];
  totalCorrectAnswers: number;
  isLoading: boolean;
  error: string;
}

const initialState: IQuizState = {
  question: {
    category: '',
    type: '',
    difficulty: '',
    incorrect_answers: [''],
    correct_answer: '',
    question: '',
  },
  results: [],
  submitedQuestions: [],
  currentQuestion: 0,
  totalCorrectAnswers: 0,
  isLoading: false,
  error: '',
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestion(state, action: PayloadAction<IQuiz>) {
      state.question = action.payload;
    },
    setCurrentQuestion(state, action: PayloadAction<number>) {
      state.currentQuestion = action.payload;
    },
    setPreviusQuestion(state) {
      state.currentQuestion = state.currentQuestion - 1;
      state.question = state.results[state.currentQuestion];
    },
    setNextQuestion(state) {
      state.currentQuestion = state.currentQuestion + 1;
      state.question = state.results[state.currentQuestion];
    },
    setSubmitedQuestions(state, action: PayloadAction<boolean[]>) {
      state.submitedQuestions = action.payload;
    },
    setTotalCorrectAnswers(state, action: PayloadAction<number>) {
      state.totalCorrectAnswers = state.totalCorrectAnswers + action.payload;
    },
    setFinish(state) {
      const arr = [];
      for (let i = 0; i < state.results.length; i++) {
        arr.push(true);
      }
      state.submitedQuestions = arr;
    },
  },
  extraReducers: {
    [fetchQuiz.fulfilled.type]: (state, action: PayloadAction<IQuiz[]>) => {
      state.results = action.payload;
      state.error = '';
      state.isLoading = false;
    },
    [fetchQuiz.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchQuiz.rejected.type]: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export default quizSlice.reducer;
