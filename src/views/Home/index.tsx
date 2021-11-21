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

  const {
    setPagination,
    setMaxSteps,
    setActiveStep,
    setLastStep,
    setLoading,
    setNumberQuestionsAnswered,
  } = useContext(FooterModeContext);
  
  const { 
    setIsCorrectAnswer,
    setName,
    setQuantityCorrectAnswers,
    setQuantityQuestion,
    setQuantityWrongAnswers,
    setResults
  } = useContext(ClientContext);

  useEffect(() => {
    setPagination(false);
    setMaxSteps(0);
    setActiveStep(0);
    setLastStep(false);
    setLoading(false);
    setNumberQuestionsAnswered(0);
    setIsCorrectAnswer([]);
    setName('');
    setQuantityCorrectAnswers(0);
    setQuantityQuestion(0);
    setQuantityWrongAnswers(0);
    setResults([]);
  }, [])

  return (
    <Container>
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >

        <Grid item xs={12} md={7} lg={6}>
          <Header>We are a general<br/> questions platform</Header>
          <Subtitle>Here you can learn about everything and everyone, just start.</Subtitle>
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