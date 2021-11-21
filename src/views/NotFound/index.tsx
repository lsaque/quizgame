import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { ROOT } from '../../utils/constants/routes.constants';
import Button from '../../components/inputs/Button';

const NotFound: React.FC = () => {

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item textAlign="center">
        <Typography variant="h1" component="h1">
          <b>Sorry,</b> 😓
        </Typography>
        <Typography variant="h4" component="h2" marginY={4}>This page doens't exist!</Typography>
        <Link to={ROOT} style={{ textDecoration: 'none' }}>
          <Button typeStyle="text" variant="contained" text="Return to home"/>
        </Link>
      </Grid>
    </Grid>
  );
}

export default NotFound;