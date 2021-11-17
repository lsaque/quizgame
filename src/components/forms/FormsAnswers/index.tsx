import React, { useEffect } from 'react';
import { Grid } from '@mui/material';

import InternalContainer from '../../layout/InternalGrid';

const FormsAnswers: React.FC = ({ children }) => {
 
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

export default FormsAnswers;