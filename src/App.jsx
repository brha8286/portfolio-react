import React from 'react';
import Homepage from './components/Homepage';
import './styles/normalize.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Copyright from './Copyright';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
 */}
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="*">
            This is not the URL you are looking for.
          </Route>
        </Switch>
      </Router>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default App;
