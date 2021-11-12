import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const RegularFont = 400;

const Theme = (mode: PaletteMode) => useMemo(
  () => createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
      },
      primary: {
        main: '#F6514E',
      },
      error: {
        main: '#FF3131',
      },
      info: {
        main: '#317DFF',
      },
      success: {
        main: '#00FB00',
      },
      text: {
      ...(mode === 'dark'
          ? {
            primary: '#fff',
            secondary: '#929292',
          }
          : {
            primary: '#101010',
            secondary: '#2F2F2F',
          }
        ),
      },
      background: {
        ...(mode === 'dark'
          ? {
            default: '#000',
          }
          : {
            default: '#fff',
          }
        ),
      },
      action: {
        ...(mode === 'dark'
          ? { /* hover */ }
          : { /* hover */ }
        ),
      }
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: ['Poppins','sans-serif',].join(','),
      fontWeightLight: 300,
      fontWeightRegular: RegularFont,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    components: {
      MuiPaper: {
        variants: [
          {
            props: { className: 'background' },
            style: {
              height: '100%',
              minHeight: '100vh',
              backgroundColor: 'background.default',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'difference',
              display: 'flex',
              justifyContent: 'center',
              '&::before': {
                content: '""',
                backdropFilter: 'blur(25px)',
                height: '100%',
                minHeight: '100vh',
                position: 'absolute',
                width: '100%',
              },
            }
          }
        ]
      },
      MuiAppBar: {
        defaultProps: {
          position: 'static',
          color: 'transparent',
          elevation: 0,
          style: {
            height: 120,
            justifyContent: 'center',
          }
        }
      },
      MuiToolbar: {
        defaultProps: {
          style: { padding: 0 }          
        }
      },
      MuiContainer: {
        variants: [
          {
            props: { className: 'mainContent' },
            style: { position: 'absolute' }
          }
        ]
      },
      MuiButton: {
        variants: [
          {
            props: { className: 'navbarItem' },
            style: { padding: '0 20px' }
          },
        ],
        defaultProps: {
          style: {
            textTransform: 'capitalize',
            fontWeight: RegularFont || 'typography.fontWeightRegular',
          }
        }
      },
    },
  }),
  [mode]
);

export default Theme;