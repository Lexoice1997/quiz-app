import { Box, CircularProgress } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const MyProgress = () => {
  return (
    <Box sx={style}>
      <CircularProgress />
    </Box>
  );
};

export default MyProgress;
