import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IVideoResultProps{
  video: string,
}

const VideoResult: React.FC<IVideoResultProps> = ({ video }) => {

  const theme = useTheme();
  
  return (
    <Grid container>
      <Grid item xs={12}>
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
              maxHeight: 467,
              maxWidth: 'auto',
              backgroundColor: '#000',
              filter: theme.palette.mode === 'dark' ? 'invert(0)' : 'grayscale(1) invert(0.9)',
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default VideoResult;