import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box 
      sx={{ 
        position: 'absolute', 
        display: 'inline-flex',
        zIndex: 1,
        marginLeft: '30px',
        marginTop: '30px',
      }}
    >
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 400 : 900],
          position: 'absolute',
        }}
        size={60}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress variant="determinate" {...props} size={60}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}