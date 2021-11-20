import React, { useEffect, useState } from 'react';
import { FormControlLabel, useTheme } from '@mui/material';
import parse from 'html-react-parser';

import RadioButton from '../../inputs/RadioButton';

interface IControlCheckAnswerProps {
  value: string,
  checkAnswers?: 'correct' | 'incorrect' | 'default',
  [x: string]: any,
}

const ControlCheckAnswer: React.FC<IControlCheckAnswerProps> = ({ value, checkAnswers, ...rest }) => {

  const theme = useTheme();
  // const [isFocused, setFocus] = useState(false);

  useEffect(() => {
    switch (checkAnswers) {
      case 'correct':
        console.log('green')
        break;
      case 'incorrect':
        console.log('red')
        break;
      default: 
        console.log('blue')
        break;
    }
    // console.log(checkAnswers ? `2px solid green` : `2px solid blue`)
  },[])

  return (
    <FormControlLabel 
      //@ts-ignore
      label={parse(value)}
      value={parse(value)}
      // onClick={() => setFocus(true)}
      // onBlur={() => setFocus(false)}
      // onDoubleClick={() => setFocus(false)}
      control={<RadioButton/>}
      sx={{
        // theme.palette.mode === 'dark' ? '1px solid rgba(118, 118, 118, 0.329)' : '1px solid rgba(133, 133, 133, 0.479)',
        // border: checkAnswers ? `2px solid ${theme.palette.success}` : checkAnswers===false ? `2px solid ${theme.palette.error}` : `2px solid ${theme.palette.info}`
      }}
      {...rest}
    />
  );
}

export default ControlCheckAnswer;