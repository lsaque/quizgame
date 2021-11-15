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
          <Header>Treine o seu<br/>conhecimento</Header>
          <Subtitle>Antes de iniciarmos, preciso que preencha só mais um campo, para te enviarmos uma pizza depois, fechou? 😋✌</Subtitle>
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