import React, { useContext, useEffect, useState } from 'react';
import { Grid, Box, FormControl, RadioGroup } from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import SwipeableViews from 'react-swipeable-views';
import parse from 'html-react-parser';

import Header from '../../display/Header';
import Subtitle from '../../display/Subtitle';
import ApiData from '../../../types/ApiData';
import FormsAnswers from '../../forms/FormsAnswers';
import Button from '../../inputs/Button';
import InternalContainer from '../../layout/InternalGrid';
import FooterModeContext from '../../../contexts/FooterModeContext';
import ApiContext from '../../../contexts/ApiContext';
import ControlLabel from '../../feedback/ControlLabel';

interface IStepperQuizProps {
  data: ApiData
}

interface MyValues { 
  answers: string[],
}

const StepperQuiz: React.FC<IStepperQuizProps> = ({ data }) => {
  const { clientState, setApiState } = useContext(ApiContext);

  useEffect(() => {
    data.results.forEach( async (element) => {
      try {
        if(element.incorrect_answers.length === 3 || element.incorrect_answers.length === 1){
          element.incorrect_answers.push(element.correct_answer)
        }
      } finally {
        element.incorrect_answers=getRandomAnswers(element.incorrect_answers).slice(0);
      }
    });
  },[])

  const dataResults = data.results;

  const { 
    isLoading,
    setLoading,
    maxSteps,
    setMaxSteps,
    activeStep,
    setActiveStep,
    setNumberQuestionsAnswered
  } = useContext(FooterModeContext);

  setMaxSteps(dataResults.length);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const radioNextRadioButton = (index: number) => {
    setTimeout(() => {
      if(activeStep !== maxSteps - 1){
        setActiveStep(index + 1);
      }
    }, 500)
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const getRandomAnswers = (array: string[]) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  
  const handleSubmit = () => {
    if(activeStep === maxSteps - 1){
      formik.handleSubmit();
      setLoading(true);
    } else {
      handleNext();
    }
  }

  const formik: FormikProps<MyValues> = useFormik<MyValues>({
    initialValues: {
      answers: [],
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      // setLoading(true);
      // setTimeout(() => {
        //   setClientState({name: values.name});
        //   setLoading(false);
        //   navigate(QUIZ);
        // }, 500);
      },
    });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <SwipeableViews
            resistance={true}
            index={activeStep}
            onChangeIndex={handleStepChange}
            // enableMouseEvents
          >
            {dataResults.map((item, index) => (              
              <Box key={index}>
                {Math.abs(activeStep - index) <= 2 
                  ? <div>
                      <Header questions>{parse(item.question)}</Header>
                      <Subtitle difficulty={item.difficulty}>{parse(item.category)}</Subtitle>
                      <FormsAnswers>
                        <FormControl component="fieldset">
                          <RadioGroup 
                            name={item.question}
                            value={formik.values.answers[index]}
                            onClick={() => radioNextRadioButton(index)}
                            onChange={(event) => {
                              formik.setFieldValue(`answers[${index}]`, event.target.value);
                              formik.handleChange(`answers[${index}]`);
                              setNumberQuestionsAnswered(formik.values.answers.length + 1)
                            }}
                          >
                            {item.incorrect_answers.map((value, key) => (
                              <ControlLabel value={value} key={key} />
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </FormsAnswers>
                    </div>
                  : null 
                }
              </Box>
            ))}
          </SwipeableViews>
        </Grid>

        <InternalContainer>
          <Grid container> 
            <Grid item xs={3} mt={4}>
              { activeStep === maxSteps - 1 ? 
                <Button
                  typeStyle="text" 
                  variant="contained"
                  name="submitButton"
                  type="submit"
                  text="Finish"
                  loading={isLoading}
                  onClick={async () => handleSubmit()} 
                /> : 
                <Button
                  typeStyle="text" 
                  variant="contained"
                  name="nextButton"
                  text="Next"
                  onClick={handleNext}
                />
              }
            </Grid>
          </Grid>
        </InternalContainer>
      </Grid>
    </form>
  );
}

export default StepperQuiz;