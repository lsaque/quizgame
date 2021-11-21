import React from 'react';
import { Container, Paper, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Background from '../../../assets/images/background/background.png'; 

const LayoutContainer: React.FC = ({ children }) => {

  const theme = useTheme();
  
  const backgroundIcon = (
    <Box
      sx={{
        border: {
          xs: `80px solid ${theme.palette.primary.main}`,
          md: `50px solid ${theme.palette.primary.main}`
        },
        height: {xs: 200, md: 650},
        width: {xs: 200, md: 650},
        borderRadius: {xs: 100, md: 650},
      }}
    />
  )

  return (
    <Paper
      className="background"
      sx={{ backgroundImage: `url(${ Background })` }}
    >
      <Grid container>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          {backgroundIcon}
        </Grid>
      </Grid>
      <Container maxWidth="xl" className="layoutContainer">
        {children}
      </Container>
    </Paper>
  );
}

export default LayoutContainer;