import React, { useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@mui/material';

import { FooterModeContext } from '../../contexts/FooterModeContext';
import Header from '../../components/display/Header';
import Subtitle from '../../components/display/Subtitle';
import FormsHome from '../../components/forms/FormsHome';
import CardVideo from '../../components/surfaces/CardVideo';

const Home: React.FC = () => {

  const { setState: setGlobalState } = useContext(FooterModeContext);

  useEffect(() => {
    setGlobalState({ isPagination: false });
  }, [setGlobalState])

  return (
    <Container>
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >

        <Grid item xs={12} md={7} lg={6}>
          <Header>Questionário de <br/>perguntas gerais</Header>
          <Subtitle>Now it's new black and old goldNow it's new black and old goldNow it's new black</Subtitle>
          <FormsHome/>
        </Grid>

        <Grid item xs={12} md={5} lg={6} 
          sx={{ marginTop: { xs: '30px', lg: 0 } }}
        >
          <CardVideo/>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Home;