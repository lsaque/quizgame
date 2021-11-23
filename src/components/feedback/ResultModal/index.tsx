import { useContext } from 'react';
import parse from 'html-react-parser';
import { Dialog, DialogActions, DialogContent, Grid, Box, useTheme, FormControl, RadioGroup, Alert } from '@mui/material';

import { ReactComponent as Logo } from '../../../assets/images/logo/logo.svg';
import video from '../../../assets/videos/runningHorse.mp4';
import CardVideo from '../../surfaces/VideoResult';
import Subtitle from '../../display/Subtitle';
import Header from '../../display/Header';
import ProgressTag from '../../feedback/ProgressTag';

import Container from '../../layout/QuizContainer';
import ControlCheckAnswer from '../ControlCheckAnswer';
import ClientContext from '../../../contexts/ClientContext';

import Button from '../../inputs/Button';

interface IResultModalProps {
  isOpenModal: boolean,
  loading?: boolean,
  handleModalClose?: React.MouseEventHandler<HTMLButtonElement>,
}

const ResultModal: React.FC<IResultModalProps> = ({ isOpenModal, handleModalClose, loading }) => {
  const theme = useTheme();
  
  const { 
    name,
    quantityQuestion,
    quantityWrongAnswers,
    quantityCorrectAnswers,
    results,
  } = useContext(ClientContext);

  const handleSetTypeStyle = (correctAnswer: string, clientAnswer: string, currentAnswer: string): string => {
    if((correctAnswer === clientAnswer) && (clientAnswer === currentAnswer)){
      return "success"
    } else if(correctAnswer === currentAnswer){
      return "success"
    } else if((correctAnswer  !== clientAnswer) && (clientAnswer === currentAnswer)){
      return "error"
    } else {
      return "default"
    }
  }

  const progress = [
    {
      typeStyle: "info",
      resultNumber: quantityQuestion,
    },
    {
      typeStyle: "success",
      resultNumber: quantityCorrectAnswers,
    },
    {
      typeStyle: "error",
      resultNumber: quantityWrongAnswers,
    },
  ]

  return (
    <Dialog
      open={isOpenModal}
      scroll="paper"
      maxWidth="md"
      onBackdropClick={handleModalClose}
    >
      <DialogContent dividers={true}>
        <Grid container>
          <Grid container justifyContent="space-between" paddingY={5}>
            <Box flexGrow={1} maxWidth={600}>
              <Header questions>Congrats, {name === '' ? 'Sapient' : name} 🎉</Header>
              <Subtitle result>Scroll down  to see the correct and incorrect answers</Subtitle>
            </Box>
            <Box paddingRight={5} display={{xs: 'none', md: 'flex'}}>
              <Logo fill={theme.palette.text.primary} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <CardVideo video={video}/>
          </Grid>

          <Grid container spacing={2} paddingY={4}>
            {progress.map((element, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ProgressTag 
                name={typeof name === null ? 'sapient' : name} 
                typeStyle={element.typeStyle}
                resultNumber={element.resultNumber}
                quantityQuestion={quantityQuestion}
              />
            </Grid>
            ))}
          </Grid>

          <Grid 
            container 
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {results.map((result, index) => (
              <Grid item xs={12} md={10} key={index} mt={{ xs: 3, md: 15 }}>
                <Header questions>{parse(result.question)}</Header>
                <Subtitle difficulty={result.difficulty}>{parse(result.category)}</Subtitle>
                <Container>
                  <FormControl component="fieldset" disabled >
                    <RadioGroup 
                      name={result.question}
                      value={parse(result.client_answer)}
                    >
                      {result.answers.map((answer, key) => (
                        <ControlCheckAnswer
                          typeStyle={handleSetTypeStyle(result.correct_answer, result.client_answer, answer)}
                          value={answer}
                          key={key}
                        />
                      ))}
                    </RadioGroup>
                    {result.correct_answer === result.client_answer 
                    ? (
                      <Alert variant="standard" severity="success" sx={{marginTop: 1.5}}>
                        Congratulations! You got this right!
                      </Alert>
                    ) : ( 
                      <Alert variant="standard" severity="error" sx={{marginTop: 1.5}}>
                        Ops, you missed! Right answer: {parse(result.correct_answer)}
                      </Alert>
                    )}
                  </FormControl>
                </Container>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="right">
          <Grid item xs={12} sm={2.5} md={1.5}>
            <Button 
              autoFocus 
              small
              typeStyle="text"
              text="Leave to Home"
              variant="text"
              loading={loading}
              onClick={handleModalClose}
            />
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default ResultModal;