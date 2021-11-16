import React from 'react';
import { TextField } from '@mui/material';

interface IInputProps {
  type: string, 
  label: string,
  [x: string]: any,
}

const Input: React.FC<IInputProps> = ({ type, label, ...rest }) => {
  return (
    <TextField
      {...rest}
      fullWidth
      autoComplete="off" 
      label={label}
      type={type}
      className="customInput"
    />
  );
}

export default Input;