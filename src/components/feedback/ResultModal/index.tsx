import react, { useEffect, useRef, useState } from 'react';
import parse from 'html-react-parser';
import { Dialog, DialogProps, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Box, useTheme, FormControl, RadioGroup, Button, Divider } from '@mui/material';

import { ReactComponent as Logo } from '../../../assets/images/logo/logo.svg';
import video from '../../../assets/videos/runningHorse.mp4';
import CardVideo from '../../surfaces/VideoResult';
import Subtitle from '../../display/Subtitle';
import Header from '../../display/Header';
import ProgressTag from '../../feedback/ProgressTag';

import ApiData from '../../../types/ApiData';
import Container from '../../layout/QuizContainer';
import ControlCheckAnswer from '../ControlCheckAnswer';

interface IResultModalProps {
  data: any
}

const ResultModal: React.FC<IResultModalProps> = ({data}) => {
  const text = 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.'
  const [open, setOpen] = useState(false);
  const descriptionElementRef = useRef<HTMLElement>(null);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen}>Abrir modal</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        maxWidth="md"
        // aria-labelledby="scroll-dialog-title"
        // aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={true}>
          <Grid container>
            <Grid container justifyContent="space-between" paddingY={5}>
              <Box flexGrow={1} maxWidth={600}>
                <Header questions>Congrats, Isaque 🎉</Header>
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
              <Grid item xs={12} md={4}>
                <ProgressTag 
                  name="Isaque" 
                  typeStyle="info"
                  resultNumber={10} 
                />
              </Grid>
              <Grid item xs={12} md={4}>
              <ProgressTag 
                  name="Isaque" 
                  typeStyle="error"
                  resultNumber={2} 
                />
              </Grid>
              <Grid item xs={12} md={4}>
              <ProgressTag 
                  name="Isaque" 
                  typeStyle="success"
                  resultNumber={8} 
                />
              </Grid>
            </Grid>

            <Grid 
              container 
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {data.results?.map((item, index) => (
                <Grid item xs={12} md={10} key={index} mt={{xs: 3, md: 15}}>
                  <Header questions>{parse(item.question)}</Header>
                  <Subtitle difficulty={item.difficulty}>{parse(item.category)}</Subtitle>
                  <Container>
                    <FormControl component="fieldset" disabled>
                      <RadioGroup 
                        name={item.question}
                        value={parse(item.correct_answer)}
                      >
                        {item.incorrect_answers.map((value, key) => (
                          <ControlCheckAnswer 
                            checkAnswers={value === item.correct_answer[1] ? 'correct' : 'incorrect'}
                            value={value}
                            key={key}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Container>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ResultModal;
