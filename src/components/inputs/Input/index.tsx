import React from 'react';
import { TextField } from '@mui/material';

interface IInputProps {
  type: string, 
  label: string,
}

const Input: React.FC<IInputProps> = ({ type, label }) => {
  return (
    <TextField
      fullWidth 
      label={label}
      type={type}
      className="customInput"
    />
  );
}

export default Input;