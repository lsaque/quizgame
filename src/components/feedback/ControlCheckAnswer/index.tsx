import React, { useEffect, useState } from 'react';
import { FormControlLabel, useTheme } from '@mui/material';
import parse from 'html-react-parser';

import RadioButton from '../../inputs/RadioButton';

interface IControlCheckAnswerProps {
  value: string,
  typeStyle: string | 'default' | 'error' | 'success',
  [x: string]: any,
}

const ControlCheckAnswer: React.FC<IControlCheckAnswerProps> = ({ value, typeStyle, ...rest }) => {

  const theme = useTheme();
  const [style, setStyle] = useState({
    border: theme.palette.mode === 'dark' 
      ? '1px solid rgba(118, 118, 118, 0.329)' 
      : '1px solid rgba(133, 133, 133, 0.479)'
  });
  

  useEffect(() => {
    switch (typeStyle) {
      case 'success':
        setStyle({border: `1px solid #00FB00`})
      break;

      case 'error':
        setStyle({border: `1px solid #FF3131`})
      break;
    }
  },[])

  return (
    <FormControlLabel 
      //@ts-ignore
      label={parse(value)}
      value={parse(value)}
      control={<RadioButton/>}
      sx={style}
      {...rest}
    />
  );
}

export default ControlCheckAnswer;