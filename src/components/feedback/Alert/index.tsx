import React from 'react';
import { Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import Button from '../../inputs/Button';

interface IAlertProps {
  title: string,
  content: string,
  cancelTitle: string,
  acceptTitle: string,
  isOpenModal: boolean,
  loading: boolean,
  onClose: React.MouseEventHandler<HTMLButtonElement>,
  handleModalClose: React.MouseEventHandler<HTMLButtonElement>,
  [x: string]: any,
  // handleModalOpen: Function,
}

const Alert: React.FC<IAlertProps> = ({title, content,onClose, cancelTitle, acceptTitle, handleModalClose, isOpenModal, loading, ...rest}) => {

  // const [isOpenModal, setOpenModal] = useState(false);

  // const handleModalOpen = () => {
  //   setOpenModal(true);
  // };

  // const handleModalClose = () => {
  //   setOpenModal(false);
  // };

  return (
    <Dialog
      maxWidth="xs"
      open={isOpenModal}
      onClose={() => handleModalClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={1} justifyContent="center" margin={1}>
          <Grid item xs={4}>
            <Button 
              onClick={handleModalClose} 
              typeStyle="text"
              loading={loading}
              variant="outlined"
              text={acceptTitle}
            />
          </Grid>
          <Grid item xs={8}>
            <Button 
              onClick={onClose} 
              typeStyle="text"
              variant="contained"
              text={cancelTitle}
            />
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default Alert;
