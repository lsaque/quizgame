import React, { useState, useMemo } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@mui/material/styles';

import { ColorModeContext } from './context/ColorModeContext';
import { DEFAULT_VALUE, FooterModeContext } from './context/FooterModeContext';

import customTheme from './assets/styles/Theme';

import Routes from './navigation/Routes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LayoutContainer from './components/layout/Container';
import AppContent from './components/layout/Content';

const App: React.FC = () => {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const [state, setState] = useState(DEFAULT_VALUE.state);
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
          <AppContent>
            <FooterModeContext.Provider value={{state, setState}}>
              <Navbar/>
                <Routes/>
              <Footer/>
            </FooterModeContext.Provider>
          </AppContent>
        </LayoutContainer>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;