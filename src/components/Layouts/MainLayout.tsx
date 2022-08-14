import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const MainLayout = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
