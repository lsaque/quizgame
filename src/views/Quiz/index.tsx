import React, { useEffect, useContext } from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@mui/material';

import FooterModeContext from '../../contexts/FooterModeContext';
import ApiContext from '../../contexts/ApiContext';

import CardVideo from '../../components/surfaces/CardVideo';
import video from '../../assets/videos/transformingMan.mp4';
import StepperQuiz from '../../components/navigation/StepperQuiz';

const api = {
  responseCode: 0,
  results: [
    {
      category: "Entertainment: Music kflsj kljsflkjf lkjslkfj ",
      type: "multiple",
      difficulty: "easy",
      question: "Ringo Starr of The Beatles mainly played what instrument?",
      correct_answer: "Drums",
      incorrect_answers: [
        "Bass",
        "Guitar",
        "Piano"
      ],
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "hard",
      question: "In what Disney movie can you spot the character &quot;Pac-Man&quot; in if you look closely enough in some scenes?",
      correct_answer: "Tron",
      incorrect_answers: [
        "Big Hero 6",
        "Fantasia",
        "Monsters, Inc."
      ]
    },
    // {
    //   category: "History",
    //   type: "multiple",
    //   difficulty: "medium",
    //   question: "What was the total length of the Titanic?",
    //   correct_answer: "882 ft | 268.8 m",
    //   incorrect_answers: [
    //     "759 ft | 231.3 m",
    //     "1042 ft | 317.6 m",
    //     "825 ft | 251.5 m"
    //   ]
    // },
    // {
    //   category: "Entertainment: Music",
    //   type: "multiple",
    //   difficulty: "easy",
    //   question: "&quot;Hallelujah&quot; is a song written by which Canadian recording artist?",
    //   correct_answer: "Leonard Cohen",
    //   incorrect_answers: [
    //     "Kory Lefkowits",
    //     "Ryan Letourneau ",
    //     "Justin Bieber "
    //   ]
    // },
    // {
    //   category: "Entertainment: Music",
    //   type: "multiple",
    //   difficulty: "easy",
    //   question: "Who is the lead singer of Arctic Monkeys?",
    //   correct_answer: "Alex Turner",
    //   incorrect_answers: [
    //     "Jamie Cook",
    //     "Matt Helders",
    //     "Nick O&#039;Malley"
    //   ]
    // }
  ]
}

const Quiz: React.FC = () => {

  const { setPagination, activeStep, maxSteps, numberQuestionsAnswered } = useContext(FooterModeContext);
  const { clientState, apiState } = useContext(ApiContext);
  const progress = (numberQuestionsAnswered / maxSteps) * 100;

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
          <StepperQuiz data={apiState}/>
        </Grid> 

        <Grid item xs={12} md={6} marginTop={{ xs: '30px', lg: 0 }} display={{ xs: 'none', md: 'block' }}>
          <CardVideo video={video} progress={progress}/>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Quiz;