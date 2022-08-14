import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface ILogo {
  children: string;
}

const Logo: FC<ILogo> = ({ children }) => {
  return (
    <NavLink to={'/'} className="logo">
      <h2 className="logo">{children}</h2>
    </NavLink>
  );
};

export default Logo;
