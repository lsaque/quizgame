import React from 'react';
import { LoadingButton } from '@mui/lab';

interface IButtonProps {
  typeStyle: 'icon' | 'text',
  icon?: Object | null,
  text?: string | null, 
  href?: any,
  small?: boolean,
  [x: string]: any,
}

const Button: React.FC<IButtonProps> = ({ icon, href, text, typeStyle, small, ...rest }) => {

  return (
    <LoadingButton
      {...rest}
      href={href}
      className="customButton"
      sx={{
        height: small ? '40px' : '56px',
        width: '100%',
      }}
    >
      { typeStyle === 'icon' ? icon : text }
    </LoadingButton>
  );
}


export default Button;