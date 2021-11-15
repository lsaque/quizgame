import React from 'react';
import { Card, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Container from '../../layout/InternalGrid';

interface ICardVideoProps{
  video: string
}

const CardVideo: React.FC<ICardVideoProps> = ({ video }) => {

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
            maxHeight: 593,
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