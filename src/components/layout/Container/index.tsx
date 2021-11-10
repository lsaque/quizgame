import React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';

import Background from '../../../assets/images/background/background.png'; 

const LayoutContainer: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${ Background })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: theme.palette.background.default,
        backgroundBlendMode: 'difference'
      }}
    >
      <Container maxWidth="xl">
        {children}
      </Container>
    </Box>
  );
}

export default LayoutContainer;