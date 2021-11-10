import React, { useState, useMemo } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@mui/material/styles';

import { ColorModeContext } from './context/ColorModeContext';
import customTheme from './assets/styles/Theme'
import Routes from './navigation/Routes';
import Navbar from './components/layout/Navbar';
import LayoutContainer from './components/layout/Container';

const App: React.FC = () => {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const theme = customTheme(mode);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <CssBaseline />
          <Navbar/>
          <Routes/> 
        </LayoutContainer>
        {/* <Container maxWidth="xl">
          <CssBaseline />
          <Navbar/>
          <Routes/> 
        </Container> */}

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;