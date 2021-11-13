import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface IButtonIconProps {
  icon: Object
  onClick?: () => {},
  href?: any,
  [x: string]: any,
}

const ButtonIcon: React.FC<IButtonIconProps> = ({ icon, onClick, href, ...rest }) => {
  return (
    <Link to={href}>
      <Button 
        {...rest}
        variant="contained"
        onClick={onClick}
      >
        {icon}
      </Button>
    </Link>
  );
}


export default ButtonIcon;