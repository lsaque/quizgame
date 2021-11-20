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
        white: '#FFF',
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
            primary: '#FFF',
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
            default: '#FFF',
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
      h1 : {
        fontWeightRegular: RegularFont,
      },
      h2: {
        fontWeightRegular: RegularFont,
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 1100,
        lg: 1472,
        xl: 1728,
      },
    },
    components: {
      MuiPaper: {
        variants: [
          {
            props: { className: 'background' },
            style: {
              position: 'fixed',
              height:'100vh',
              width: '100vw',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
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
          },
          {
            props: { className: 'leftHeaderItem' },
            style: {
              backgroundColor: mode === 'dark' ? '#FFF' : '#000',
              width: 70,
              height: 4,
              borderRadius: 10,
              marginTop: 35,
              marginRight: 40,
              '@media (max-width: 700px)': {
                backgroundColor: '#F6514E',
                marginBottom: 20,
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
            props: { className: 'layoutContainer' },
            style: { 
              position: 'absolute',
              overflow: 'auto',
            }
          },
          {
            props: { className: 'appContainer'},
            style: {
              padding: 0,
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }
          }
        ]
      },
      MuiButton: {
        variants: [
          {
            props: { className: 'navbarItem' },
            style: { 
              padding: '0 20px',
              maxHeight: '40px',
            }
          }
        ],
        defaultProps: {
          style: {
            textTransform: 'capitalize',
            fontWeight: RegularFont || 'typography.fontWeightRegular',
          }
        }
      },
      MuiTypography: {
        variants: [
          {
            props: { className: 'leftFooterItem' },
            style: {
              textAlign: 'left',
              position: 'absolute',
              transform: 'rotate(-90deg)',
              transformOrigin: '0 0',
              bottom: 30,
              color: mode === 'dark' ? '#929292' : '#2F2F2F',
              '@media (max-height: 830px)': {
                transform: 'none',
                position: 'inherit',
              },
              '&::before': {
                content: '""',
                height: 2,
                width: 25,
                display: 'inline-block',
                position: 'relative',
                marginRight: 15,
                bottom: 4.5,
                borderRadius: 10,
                backgroundColor: mode === 'dark' ? '#929292' : '#2F2F2F', //'#FFF' : '#000'
              }
            }
          },
          {
            props: { className: 'header' },
            style: {
              fontWeight: RegularFont,
              '@media (min-width: 1450px)': {
                fontSize: '3.6rem',
              },
            }
          },
          {
            props: { className: 'headerQuestions' },
            style: {
              fontWeight: RegularFont,
              '@media (min-width: 1450px)': {
                fontSize: '2.2rem',
              },
              '@media (max-width: 1450px)': {
                fontSize: '1.8rem',
              },
            }
          }
        ]
      },
      MuiTextField: {
        variants: [
          {
            props: { className: 'customInput' },
            style: {
              '& .MuiInputBase-root': {
                backgroundColor: mode === 'dark' ? '#04040484' : '#ffffff84',
              }
            }
          }
        ],
      },
      MuiFormControlLabel: {
        defaultProps: {
          style: {
            backgroundColor: mode === 'dark' ? '#04040484' : '#ffffff84',
            marginTop: '10px',
            width: '100%',
            borderRadius: '10px',
            height: '56px',
            paddingLeft: '10px',
            marginLeft: 0,
          }
        }
      },
      MuiFormControl: {
        defaultProps: {
          style: {
            width: '100%',
          }
        }
      },
      MuiDialogContent: {
        defaultProps: {
          style: {
            overflowX: 'hidden',
          }
        }
      }
    },
  }),
  [mode]
);

export default Theme;