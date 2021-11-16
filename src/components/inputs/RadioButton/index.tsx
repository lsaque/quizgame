import React from 'react';
import { Radio } from '@mui/material';

interface IRadioButtonProps {
  checked?: boolean | undefined;
  [x: string]: any,
}

const RadioButton: React.FC<IRadioButtonProps> = ({checked, ...rest }) => {
  return (
    <Radio
      {...rest}
      required
    />
  );
}

export default RadioButton;