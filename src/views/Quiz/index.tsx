import React, { useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@mui/material';

import FooterModeContext from '../../contexts/FooterModeContext';
import ApiContext from '../../contexts/ApiContext';

import CardVideo from '../../components/surfaces/CardVideo';
import video from '../../assets/videos/transformingMan.mp4';
import FormsQuiz from '../../components/forms/FormsQuiz';

const Quiz: React.FC = () => {

  const { setPagination, maxSteps, numberQuestionsAnswered } = useContext(FooterModeContext);
  const { apiState } = useContext(ApiContext);
  const temporaryValue = (numberQuestionsAnswered / maxSteps) * 100;
  const progress = temporaryValue <= 100 ? temporaryValue : 100;

  useEffect(() => {
    setPagination(true);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <Container>
      <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >

        <Grid item xs={12} md={6}>
          <FormsQuiz data={apiState}/>
        </Grid> 

        <Grid item xs={12} md={6} marginTop={{ xs: '30px', lg: 0 }} display={{ xs: 'none', md: 'block' }}>
          <CardVideo video={video} progress={progress}/>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Quiz;