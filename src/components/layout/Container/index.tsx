import React from 'react';
import Box from '@mui/material/Box';
import { Container, Paper } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';

import Background from '../../../assets/images/background/background.png'; 

const LayoutContainer: React.FC = ({ children }) => {

  const theme = useTheme();
  
  const backgroundIcon = (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        height:200,
        width: 200,
        borderRadius: 100,
      }}
    />
  )

  return (
    <Paper
      className="background"
      sx={{backgroundImage: `url(${ Background })`}}
    >
      { backgroundIcon /* All of the background icons will be here */ }
      <Container maxWidth="xl" className="layoutContainer">
        { children }
      </Container>
    </Paper>
  );
}

export default LayoutContainer;