import React from 'react';
import { Grid } from '@mui/material';

const InternalGrid: React.FC = ({ children }) => {
  return (
    <Grid 
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-start"
    >
      <Grid item xs={12} sm={10}>
        {children}
      </Grid>
    </Grid>
  );
}

export default InternalGrid;