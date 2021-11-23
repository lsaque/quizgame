import React, { useContext, useEffect, useState } from 'react';
import { Grid, Box, FormControl, RadioGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import SwipeableViews from 'react-swipeable-views';
import parse from 'html-react-parser';

import { ROOT } from '../../../utils/constants/routes.constants';
import Header from '../../display/Header';
import Subtitle from '../../display/Subtitle';
import ApiData from '../../../types/ApiData';
import Container from '../../layout/QuizContainer';
import Button from '../../inputs/Button';
import InternalContainer from '../../layout/InternalGrid';
import FooterModeContext from '../../../contexts/FooterModeContext';
import ControlLabel from '../../feedback/ControlLabel';
import Alert from '../../feedback/Alert';
import ResultModal from '../../feedback/ResultModal';
import ClientContext from '../../../contexts/ClientContext';

interface IStepperQuizProps {
  data: ApiData
}

interface MyValues { 
  answers: string[],
}

const FormsQuiz: React.FC<IStepperQuizProps> = ({ data }) => {

  useEffect(() => {
    data.results.forEach( async (element) => {
      try {
        if(element.incorrect_answers.length === 3 || element.incorrect_answers.length === 1){
          element.incorrect_answers.push(element.correct_answer);
        }
      } finally {
        element.incorrect_answers=getRandomAnswers(element.incorrect_answers).slice(0);
      }
    });
  },[])

  const { 
    isLoading,
    setLoading,
    maxSteps,
    activeStep,
    setActiveStep,
    setNumberQuestionsAnswered
  } = useContext(FooterModeContext);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isResultOpen, setResultOpen] = useState(false);
  
  const navigate = useNavigate();
  const dataResults = data.results;

  const validationSchema = yup.object({
    answers: yup
      .array()
      .min(maxSteps, 'You need to answer all the questions to get the result. ✌'),
  });
  
  const { 
    name,
    setQuantityCorrectAnswers,
    setQuantityWrongAnswers,
    setQuantityQuestion,
    setIsCorrectAnswer,
    setResults,
  } = useContext(ClientContext);

  const formik: FormikProps<MyValues> = useFormik<MyValues>({
    initialValues: {
      answers: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setQuantityQuestion(maxSteps);

      data.results.forEach((element, index) => {
        setResults(state => [...state, {
          category: element.category,
          difficulty: element.difficulty,
          question: element.question,
          correct_answer: element.correct_answer,
          client_answer: values.answers[index],
          answers: element.incorrect_answers
        }])

        if(values.answers[index] === element.correct_answer){
          setQuantityCorrectAnswers(state => state + 1);
          setIsCorrectAnswer(state => [...state, true]);
        } else {
          setQuantityWrongAnswers(state => state + 1);
          setIsCorrectAnswer(state => [...state, false]);
        }
      });
      saveLocalStorage();
      setResultOpen(true);
    },
  });

  const handleQuizSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResultOpen(false);
      navigate(ROOT);
    }, 1000);
  }

  const saveLocalStorage = () => {
    let correct = 0;
    let wrong = 0;
    
    data.results.forEach((element, index) => {
      formik.values.answers[index] === element.correct_answer ? correct++ : wrong++;
    });

    let result = {
      'name': name,
      'date': getDate(),
      'quantityQuestion': maxSteps,
      'quantityWrongAnswers': wrong,
      'quantityCorrectAnswers': correct
    }

    localStorage.setItem('result', JSON.stringify(result))
  }

  const getDate = () => {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}h${date.getMinutes()}`;
  }

  const handleSubmit = () => {
    if(activeStep === maxSteps - 1){
      if(formik.isValidating){
        formik.handleSubmit();
      };
    } else handleNext();
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleModalClose = () => {
    formik.resetForm();
    setLoading(true);
    setTimeout(() => {
      setModalOpen(false);
      setLoading(false);
      navigate(ROOT);
    }, 500)
  };
  
  const handleBack = () => {
    if(activeStep !== maxSteps - 1){
      if (activeStep === 0) {
        setModalOpen(true);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      }
    }
  };
  
  const radioNextButton = (index: number) => {
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
                      <Container>
                        <FormControl component="fieldset">
                          <RadioGroup 
                            name={item.question}
                            value={formik.values.answers[index]}
                            onClick={() => radioNextButton(index)}
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
                      </Container>
                    </div>
                  : null 
                }
              </Box>
            ))}
          </SwipeableViews>
        </Grid>
        
        <ResultModal 
          loading={isLoading}
          isOpenModal={isResultOpen} 
          handleModalClose={() => handleQuizSubmit()}
        />
        
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
                  disabled={!((formik.values.answers.length === maxSteps) && formik.dirty)}
                  loading={isLoading}
                  onClick={async () => handleSubmit()} 
                /> : 
                <Button
                  variant="contained"
                  typeStyle="text"
                  name="returnButton"
                  text="Back"
                  onClick={handleBack}
                />
              }
            </Grid>
          </Grid>
          <Alert 
            isOpenModal={isModalOpen} 
            title="Quit the quiz"
            loading={isLoading} 
            content="If you leave the quiz you will lose all your answering progress, do you really want to leave?" 
            cancelTitle="No, return to quiz" 
            acceptTitle="Yes, leave" 
            onClose={() => setModalOpen(false)} 
            handleModalClose={() => handleModalClose()}       
          />
        </InternalContainer>
      </Grid>
    </form>
  );
}

export default FormsQuiz;