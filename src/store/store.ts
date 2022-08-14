import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizReducer from './slices/quizSlice';

const rootReducer = combineReducers({ quizReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
