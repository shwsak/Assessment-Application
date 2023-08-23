import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 14,
    h6: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "140%",
      color: "#1C4980",
      '@media (max-width:600px)':{
        fontWeight: 500,
      }
        
    },
    h5: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "140%",
      color: "#1C4980",
      '@media (min-width:600px)':{
        fontSize: 18,
      },
      '@media(max-width:600px)':{
        fontWeight: 600,
      }

    },
    h4: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: "140%",
      color: "#1C4980",
      '@media (max-width:600px)':{
        fontSize: 16,
        fontWeight: 600,
        lineHeight: "normal",
      }
    },
    body1: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "140%",
      color: "#1C4980",
      '@media (max-width:600px)':{
        fontSize: 10,
      }
    },
    body2: {
      fontWeight: 500,
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: '#1C4980',

    },
    secondary: {
      main: '#F2F2F2',
    },
    success: {
      light: '#05C165',
      dark: '#05C165',
      main: '#05C165',
    },
    divider: "#DADCE0",
    background: {
      default: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        secondary: {
          borderRadius: 22,
          border: '1px solid #D63500 ',
          fontWeight: 500,
          fontSize: 10,
          textTransform: 'capitalize',
          color: '#D63500',
          background: '#FBEBEA',
          padding: '4px 8px'

        },
        outlined: {
          borderRadius: '50px',
          border: '1px solid #1C4980',
          fontWeight: 500,
          fontSize: 14,
          padding: '6px 10px 6px 8px',
          textTransform: 'capitalize',
        },

      },
    },

    MuiDivider: {
      styleOverrides:{
        root:{
          borderStyle: 'dashed'
        }
      }
    }
  },



});

export default theme;