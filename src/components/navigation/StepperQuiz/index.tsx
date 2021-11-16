import React, { useContext } from 'react';
import { Grid, Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';

import Header from '../../display/Header';
import Subtitle from '../../display/Subtitle';
import ApiData from '../../../types/ApiData';
import FormsAnswers from '../../forms/FormsAnswers';
import Button from '../../inputs/Button';
import InternalContainer from '../../layout/InternalGrid';
import FooterModeContext from '../../../contexts/FooterModeContext';

interface IStepperQuizProps {
  data: ApiData
}

const StepperQuiz: React.FC<IStepperQuizProps> = ({ data }) => {
  const dataResults = data.results;
  const { 
    isLoading,
    setLoading,
    maxSteps,
    setMaxSteps,
    activeStep,
    setActiveStep
  } = useContext(FooterModeContext);

  setMaxSteps(dataResults.length);

  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const checkLastStep = (ifYes: any, ifNot: any) => {
    if (activeStep === maxSteps - 1) {
      return ifYes
    } else return ifNot
  }
  
  const handleSubmit = () => {
    if(activeStep === maxSteps - 1){
      console.log('FINALIZOU')
      setLoading(true);
    } else {
      handleNext()
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <SwipeableViews
          resistance={true}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {dataResults.map((item, index) => (
            <Box key={index}>
              {Math.abs(activeStep - index) <= 2 
                ? <>
                    <Header questions>{item.question}</Header>
                    <Subtitle difficulty={item.difficulty}>{item.category}</Subtitle>
                    <FormsAnswers data={item.incorrect_answers}/>
                  </>
                : null 
              }
            </Box>
          ))}
        </SwipeableViews>
      </Grid>

      <InternalContainer>
        <Grid container> 
          <Grid item xs={3} mt={4}>
            <Button
              typeStyle="text" 
              variant="contained"
              type={checkLastStep("submit", "button")}
              text={checkLastStep("Finish", "Next")}
              onClick={handleSubmit}
              loading={isLoading}
            />
          </Grid>
        </Grid>
      </InternalContainer>
    </Grid>
  );
}

export default StepperQuiz;