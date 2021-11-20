import React, { useContext, useEffect, useState } from 'react';
import { Grid, Box, FormControl, RadioGroup } from '@mui/material';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import SwipeableViews from 'react-swipeable-views';
import parse from 'html-react-parser';

import Header from '../../display/Header';
import Subtitle from '../../display/Subtitle';
import ApiData from '../../../types/ApiData';
import Container from '../../layout/QuizContainer';
import Button from '../../inputs/Button';
import InternalContainer from '../../layout/InternalGrid';
import FooterModeContext from '../../../contexts/FooterModeContext';
import ApiContext from '../../../contexts/ApiContext';
import ControlLabel from '../../feedback/ControlLabel';
import Alert from '../../feedback/Alert';
import ResultModal from '../../feedback/ResultModal';
import { useNavigate } from 'react-router-dom';
import { ROOT } from '../../../utils/constants/routes.constants';

interface IStepperQuizProps {
  data: ApiData
}

interface MyValues { 
  answers: string[],
}

const clientData = {
  name: 'Isaque',
  quantity_question: 2,
  quantity_wrong_answers: 1,
  quantity_correct_answers: 1,
  results: [
    {
      category: "Entertainment: Music kflsj kljsflkjf lkjslkfj ",
      difficulty: "easy",
      question: "Ringo Starr of The Beatles mainly played what instrument?",
      correct_answer: "Drums",
      client_answer: "Guitar",
      answers: [
        "Bass",
        "Guitar",
        "Piano",
        "Drums"
      ],
    },
    {
      category: "Entertainment: Film",
      difficulty: "hard",
      question: "In what Disney movie can you spot the character &quot;Pac-Man&quot; in if you look closely enough in some scenes?",
      correct_answer: "Tron",
      client_answer: "Tron",
      incorrect_answers: [
        "Big Hero 6",
        "Fantasia",
        "Monsters, Inc.",
        "Tron"
      ]
    },
  ]
}

const FormsQuiz: React.FC<IStepperQuizProps> = ({ data }) => {

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

  const { 
    isLoading,
    setLoading,
    maxSteps,
    setMaxSteps,
    activeStep,
    setActiveStep,
    setNumberQuestionsAnswered
  } = useContext(FooterModeContext);
  
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const dataResults = data.results;
  setMaxSteps(dataResults.length);

  const validationSchema = yup.object({
    answers: yup
      .array()
      .min(maxSteps, 'You need to answer all the questions to get the result. ✌'),
  });
  
  const formik: FormikProps<MyValues> = useFormik<MyValues>({
    initialValues: {
      answers: [],
    },
    // validateOnChange: false,
    // validateOnBlur: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      // setLoading(true);
        // setTimeout(() => {
          // alert('opa')
          //   setClientState({name: values.name});
          //   setLoading(false);
          //   navigate(QUIZ);
        // }, 500);
    },
  });

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
        
        <ResultModal data={clientData}/>
        
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