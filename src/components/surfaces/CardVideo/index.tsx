import React from 'react';
import { Card, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import video from '../../../assets/videos/mindBlowing.mp4';
import Container from '../../layout/InternalGrid';

const CardVideo: React.FC = () => {

  const theme = useTheme();
  
  return (
    <Container>
      <Card>
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