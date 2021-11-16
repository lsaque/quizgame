import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

interface IHeaderProps{
  questions?: boolean | undefined;
}

const Header: React.FC<IHeaderProps> = ({ children, questions }) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Paper className="leftHeaderItem" />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Typography 
          variant="h2" 
          component="h1" 
          className={ questions ? "headerQuestions" : "header"}
        >
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Header;