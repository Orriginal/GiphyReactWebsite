import React from 'react';
import Box from '@material-ui/core/Box';

const AbsoluteWrapper = ({ children }) => {
  return (
    <Box position='absolute' width='100%'>
      {children}
    </Box>
  );
};

export default AbsoluteWrapper;
