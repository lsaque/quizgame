import React, { useState, useMemo } from 'react';
import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Routes from './navigation/Routes';
import Navbar from './components/layout/Navbar';
import { ColorModeContext } from './context/ColorModeContext';

const App: React.FC = () => {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode,
      },
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <Routes/> 
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;