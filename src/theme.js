import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#eaeaea',
      main: '#cccccc',
      dark: '#878787',
      contrastText: '#000',
    },
    secondary: {
      light: '#a54e45',
      main: '#73211e',
      dark: '#420000',
      contrastText: '#000',
    },
  },
});

export default theme;