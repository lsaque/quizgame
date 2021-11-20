import React from 'react';
import { Card, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Container from '../../layout/InternalGrid';
import CircularProgress from '../../feedback/CircularProgress';

interface ICardVideoProps{
  video: string,
  progress?: any;
}

const CardVideo: React.FC<ICardVideoProps> = ({ video, progress }) => {

  const theme = useTheme();
  const renderProgress = (
    typeof progress === 'undefined' 
    ? null 
    : <CircularProgress value={progress}/>
  )
  
  return (
    <Container>
      <Card>
        {renderProgress}
        <CardMedia
          controls
          loop
          muted
          autoPlay
          component="video"
          controlsList="nodownload"
          image={video}
          sx={{
            objectFit: 'cover',
            backgroundColor: 'background.default',
            filter: theme.palette.mode === 'dark' ? 'invert(0)' : 'grayscale(1) invert(0.9)',
          }}
        />
      </Card>
    </Container>
  );
}

export default CardVideo;