import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { ColorModeContext } from '../../../context/ColorModeContext';
import { ReactComponent as Logo } from '../../../assets/images/logo/logo.svg';

export default function Navbar() {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        color='transparent'
        sx={{
          maxHeight: 120
        }}
      >
        <Toolbar>
          <Logo fill={theme.palette.text.primary}/>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Isaquiz
          </Typography>

          <Button color="inherit">Login</Button>

          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
