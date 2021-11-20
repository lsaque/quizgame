import React, { useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@mui/material';

import FooterModeContext from '../../contexts/FooterModeContext';
import Header from '../../components/display/Header';
import Subtitle from '../../components/display/Subtitle';
import FormsHome from '../../components/forms/FormsHome';
import CardVideo from '../../components/surfaces/CardVideo';

import video from '../../assets/videos/mindBlowing.mp4';
import ClientContext from '../../contexts/ClientContext';

const Home: React.FC = () => {

  const { setPagination, isPagination } = useContext(FooterModeContext);

  useEffect(() => {
    setPagination(false);
  }, [isPagination])

  const { 
    name,
    setName, 
    quantityCorrectAnswers,
    setQuantityCorrectAnswers,
    quantityWrongAnswers,
    setQuantityWrongAnswers,
    quantityQuestion,
    setQuantityQuestion,
    isCorrectAnswer,
    setIsCorrectAnswer,
    results,
    setResults,
    // clientState,
    // setClientState
  } = useContext(ClientContext);

  console.log('name: ' + name);
  console.log('quantityQuestion: ' + quantityQuestion);
  console.log('quantityWrongAnswers: ' + quantityWrongAnswers);
  console.log('quantityCorrectAnswers: ' + quantityCorrectAnswers);
  console.log(isCorrectAnswer);
  console.log(results);

  return (
    <Container>
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >

        <Grid item xs={12} md={7} lg={6}>
          <Header>Questionário de<br/>perguntas gerais</Header>
          <Subtitle>Now it's new black and old goldNow it's new black and old goldNow it's new black.</Subtitle>
          <FormsHome/>
        </Grid>

        <Grid item xs={12} md={5} lg={6} marginTop={{ xs: '30px', lg: 0 }}>
          <CardVideo video={video}/>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Home;