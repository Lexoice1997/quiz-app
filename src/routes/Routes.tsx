import { CircularProgress } from '@mui/material';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/Layouts/MainLayout';
import { FINISH, QUIZ } from '../constants';
import Result from '../pages/Result';

const Main = lazy(() => import('../pages/Main'));
const Quiz = lazy(() => import('../pages/Quiz'));

const Routs = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<CircularProgress color="secondary" />}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path={QUIZ}
          element={
            <Suspense fallback={<CircularProgress color="secondary" />}>
              <Quiz />
            </Suspense>
          }
        />
        <Route
          path={FINISH}
          element={
            <Suspense fallback={<CircularProgress color="secondary" />}>
              <Result />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Routs;
