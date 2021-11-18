import React from 'react';
import { Grid } from '@mui/material';

import InternalContainer from '../InternalGrid';

const QuizContainer: React.FC = ({ children }) => {
 
  return (
    <InternalContainer>
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </InternalContainer>
  );
}

export default QuizContainer;