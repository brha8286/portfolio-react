import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5a36',
      main: '#ff0000',
      dark: '#c20000',
      contrastText: '#000',
    },
    secondary: {
      light: '#8afffb',
      main: '#53ccc8',
      dark: '#009b97',
      contrastText: '#000',
    },
  },
});

export default theme;