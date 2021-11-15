import React from 'react';
import { LoadingButton } from '@mui/lab';

interface IButtonProps {
  typeStyle: 'icon' | 'text',
  // variant: 'contained' | 'outlined',
  icon?: Object | null,
  text?: string | null, 
  href?: any,
  [x: string]: any,
}

const Button: React.FC<IButtonProps> = ({ icon, href, text, typeStyle, ...rest }) => {

  return (
    <LoadingButton
      {...rest}
      href={href}
      className="customButton"
      sx={{
        height: '56px',
        width: '100%',
      }}
    >
      { typeStyle === 'icon' ? icon : text }
    </LoadingButton>
  );
}


export default Button;