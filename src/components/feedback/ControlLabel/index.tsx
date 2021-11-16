import React, { useState } from 'react';
import { FormControlLabel, useTheme } from '@mui/material';

import RadioButton from '../../inputs/RadioButton';

interface IControlLabelProps {
  value: string,
  [x: string]: any,
}

const ControlLabel: React.FC<IControlLabelProps> = ({value, ...rest}) => {

  const theme = useTheme();
  const [isFocused, setFocus] = useState(false);

  return (
    <FormControlLabel 
      {...rest}
      value={value}
      label={value}
      onClick={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      sx={{
        border: isFocused 
        ?  `2px solid ${theme.palette.primary.main}` 
        : theme.palette.mode === 'dark' ? '1px solid rgba(118, 118, 118, 0.329)' : '1px solid rgba(133, 133, 133, 0.479)',
      }}
      control={<RadioButton/>}
    />
  );
}

export default ControlLabel;