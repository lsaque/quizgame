import { Dialog, DialogActions, DialogContent, Grid, Box, useTheme, Typography } from '@mui/material';

import { ReactComponent as Logo } from '../../../assets/images/logo/logo.svg';
import video from '../../../assets/videos/runningHorse.mp4';
import CardVideo from '../../surfaces/VideoResult';
import Subtitle from '../../display/Subtitle';
import Header from '../../display/Header';
import ProgressTag from '../ProgressTag';
import Button from '../../inputs/Button';

interface IResultModalProps {
  isOpenModal: boolean,
  loading?: boolean,
  handleModalClose?: React.MouseEventHandler<HTMLButtonElement>,
}

const LocalScoreModal: React.FC<IResultModalProps> = ({ isOpenModal, handleModalClose }) => {
  const theme = useTheme();

  const storage = JSON.parse(localStorage.getItem('result') || '{}');
  const { name, quantityQuestion, quantityWrongAnswers, quantityCorrectAnswers } = storage;

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

  const renderLastResult = (
    <Grid container>
      <Grid container justifyContent="space-between" paddingY={5}>
        <Box flexGrow={1} maxWidth={600}>
          <Header questions>Congrats, {name} 🎉</Header>
          <Subtitle result>Scroll down  to see the correct and incorrect answers</Subtitle>
        </Box>
        <Box paddingRight={5} display={{ xs: 'none', md: 'flex' }}>
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
            name={name === null ? 'sapient' : name} 
            typeStyle={element.typeStyle}
            resultNumber={element.resultNumber}
            quantityQuestion={quantityQuestion}
          />
        </Grid>
        ))}
      </Grid>
    </Grid>
  )

  const renderCantSeeLastResult = (
    <Grid container>
      <Grid item textAlign="center" justifyContent="center">
        <Typography variant="h5" component="h5" marginBottom={2} marginTop={2}>
          <b>Last Result </b>🤨
        </Typography>
        <Typography variant="body1" component="p">Sorry, but you don't have a last match for us to see your result.<br/> But don't worry, just start the quiz right now.</Typography>
      </Grid>
    </Grid>
  )
  
  return (
    <Dialog
      open={isOpenModal}
      scroll="paper"
      maxWidth="md"
      onBackdropClick={handleModalClose}
    >
      <DialogContent dividers={true}>
        {(JSON.parse(localStorage.getItem('result')!)) === null ? renderCantSeeLastResult : renderLastResult}
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="right">
          <Grid item xs={12} sm={2.5} md={1.5}>
            <Button 
              autoFocus 
              small
              typeStyle="text"
              text="Close"
              variant="text"
              onClick={handleModalClose}
            />
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default LocalScoreModal;