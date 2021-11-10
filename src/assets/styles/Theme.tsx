import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const Theme = (mode: PaletteMode) => useMemo(
  () => createTheme({
    palette: {
      mode,
      common: {
        black: '#73ff00',
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
        ? {
          // hover: '',
        }
        : {
          // hover: '',
          }
        ),
      }
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: ['Poppins','sans-serif',].join(','),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1536,
        xl: 1728,
      },
    },
  }),
  [mode]
);

export default Theme;