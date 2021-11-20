import React, { useEffect, useState } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';

import CircularProgress from '../CircularProgress';

interface IProgressTagProps{
  name: string,
  typeStyle: 'info' | 'error' | 'success',
  resultNumber: number,
}

const ProgressTag: React.FC<IProgressTagProps> = ({name, resultNumber, typeStyle}) => {
  const theme = useTheme();
  // let { title, description, resultNumber, progress }: string = '';
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const progress = (resultNumber / 10) * 100;
  // const [resultNumber, setResultNumber] = useState('')
  // const [progress, setProgress] = useState('')
  
  useEffect(() => {
    switch (typeStyle) {
      case 'info':
        setTitle(`Woooow, sapient!`);
        setDescription(`You answered ${resultNumber}.`);
      break;
      case 'error':
        setTitle(`Oops, my dear...`);
        setDescription(`You missed ${resultNumber}.`);
      break;
      case 'success':
        setTitle(`Good job, ${name}!`);
        setDescription(`You got ${resultNumber} right.`);
      break;
      default:
        setTitle(`Profile not selected`);
      break;
    }
  },[])

  return (
    <Grid 
      container 
      justifyContent={{ xs: 'center', sm: 'space-between' }}
      alignItems="center"
      sx={{
        backgroundColor: 
          theme.palette.mode === 'dark' 
          ? '#00000050' 
          : '#bebebe50',
        paddingX: '20px',
        borderRadius: '10px',
        minHeight:'100px',
      }}
    >
      <Grid item xs={12} sm={6}>
        <Typography textAlign={{ xs: 'center', sm: 'left' }}>{title}</Typography>
        <Typography textAlign={{ xs: "center", sm: 'left' }}>{description}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}
        display={{ xs: 'none', sm: 'flex' }}
        sx={{
          position: 'relative',
          top: '-30px',
          right: '-95px',
        }}
      >
        <CircularProgress result value={progress} color={typeStyle}/>
      </Grid>
    </Grid>
  )
}

export default ProgressTag;