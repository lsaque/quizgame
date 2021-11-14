import React, { useState, useMemo } from 'react';
import { CssBaseline } from '@material-ui/core';
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import { ColorModeContext } from './contexts/ColorModeContext';
import { DEFAULT_VALUE, FooterModeContext } from './contexts/FooterModeContext';

import customTheme from './assets/styles/Theme';

import Routes from './routes/Route';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LayoutContainer from './components/layout/Container';
import AppContent from './components/layout/Content';

const App: React.FC = () => {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const [state, setState] = useState(DEFAULT_VALUE.state);
  
  let theme = customTheme(mode);
  theme = responsiveFontSizes(theme);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const ColorMode = ColorModeContext.Provider;
  const FooterMode = FooterModeContext.Provider;
  
  return (
    <ColorMode value={colorMode}>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <CssBaseline />
          <AppContent>
            <FooterMode value={{state, setState}}>
              <Navbar/>
              <Routes/>
              <Footer/>
            </FooterMode>
          </AppContent>
        </LayoutContainer>
      </ThemeProvider>
    </ColorMode>
  );
}

export default App;