import React, { useEffect, useState } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';

import CircularProgress from '../CircularProgress';

interface IProgressTagProps{
  name: string | null,
  typeStyle: string | 'info' | 'error' | 'success',
  resultNumber: number,
  quantityQuestion: number,
}

const ProgressTag: React.FC<IProgressTagProps> = ({name, resultNumber, quantityQuestion, typeStyle}) => {
  const theme = useTheme();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState<"info" | "error" | "success" | "primary">("primary");
  
  const progress = (resultNumber / quantityQuestion) * 100;

  useEffect(() => {
    switch (typeStyle) {
      case 'info':
        setTitle(`Woooow, sapient!`);
        setDescription(`You answered ${resultNumber}.`);
        setColor('info');
      break;
      case 'error':
        setTitle(`Oops, my dear...`);
        setDescription(`You missed ${resultNumber}.`);
        setColor('error');

      break;
      case 'success':
        setTitle(`Good job, ${name === '' ? 'Sapient' : name}!`);
        setDescription(`You got ${resultNumber} right.`);
        setColor('success');
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
        <CircularProgress result value={progress} color={color}/>
      </Grid>
    </Grid>
  )
}

export default ProgressTag;