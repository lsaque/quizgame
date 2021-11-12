import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, AppBar } from '@mui/material';
import { Link } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';

import { ColorModeContext } from '../../../context/ColorModeContext';
import { Container, Typography } from '@material-ui/core';


const Footer: React.FC = () => {
  
  // const theme = useTheme();
  // const colorMode = useContext(ColorModeContext);

  return (
    <AppBar component="footer">
      <Typography>
        Footer
      </Typography>
    </AppBar>
  );
}

export default Footer;
