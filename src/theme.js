import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
      default: '#fafafb',
      icon: 'rgba(25, 118, 210, 0.1)'
    },
    primary: {
      main: '#2196F3',
      contrastText: '#fff'
    },
    secondary: {
      main: '#01b956',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgb(45, 55, 72)',
      secondary: 'rgb(100, 110, 115)'
    },
    action: {
      // active: '#205E8B'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          // borderRadius: 32,
          // fontWeight: 600
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    }
  }
})

export default theme
