import { Button } from '@mui/material';
import { FC } from 'react';

interface MyButtonProps {
  children: string;
  disabled?: boolean;
  props?: any;
  className?: '';
  onClick?: () => void;
}

const MyButton: FC<MyButtonProps> = ({ children, className, disabled, ...props }) => {
  return (
    <Button
      className={`myBtn ${className}`}
      variant="contained"
      color="primary"
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MyButton;
