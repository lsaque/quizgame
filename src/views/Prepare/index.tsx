import React from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@mui/material';

import Header from '../../components/display/Header';
import Subtitle from '../../components/display/Subtitle';
import FormsPrepare from '../../components/forms/FormsPrepare';
import CardVideo from '../../components/surfaces/CardVideo';
import video from '../../assets/videos/thinkingMan.mp4';

const Prepare: React.FC = () => {
  return (
    <Container>
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >

        <Grid item xs={12} md={6}>
          <Header>Train your general<br/> knowledge now</Header>
          <Subtitle>Before we start, I need you to fill in just one more field, so we can send you a pizza later, ok? 😋✌</Subtitle>
          <FormsPrepare/>
        </Grid>

        <Grid item xs={12} md={6} marginTop={{ xs: '30px', lg: 0 }}>
          <CardVideo video={video}/>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Prepare;