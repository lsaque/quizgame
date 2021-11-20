import React, { useState, useMemo } from 'react';
import { CssBaseline } from '@material-ui/core';
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import { ColorModeContext } from './contexts/ColorModeContext';
import { FooterModeProvider } from './contexts/FooterModeContext';
import { ApiProvider } from './contexts/ApiContext';
import { ClientProvider } from './contexts/ClientContext';

import customTheme from './assets/styles/Theme';

import Routes from './routes/Route';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LayoutContainer from './components/layout/Container';
import AppContent from './components/layout/Content';

const App: React.FC = () => {

  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  
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
  
  return (
    <ColorMode value={colorMode}>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <CssBaseline />
          <AppContent>
            <FooterModeProvider>
              <ApiProvider>
                <ClientProvider>
                  <Navbar/>
                  <Routes/>
                  <Footer/>
                </ClientProvider>
              </ApiProvider>
            </FooterModeProvider>
          </AppContent>
        </LayoutContainer>
      </ThemeProvider>
    </ColorMode>
  );
}

export default App;