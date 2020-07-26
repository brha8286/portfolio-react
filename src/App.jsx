import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Homepage } from 'components/Homepage';
import {Header} from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header />
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

      <footer>
        {'Copyright © '} Brandon Harris {new Date().getFullYear()}{'.'}
      </footer>
    </div>
  );
}
