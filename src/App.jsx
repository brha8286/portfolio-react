import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Homepage } from 'components/Homepage';
import {Footer} from "./components/Footer";
import {Bio} from "./components/Bio";
import {Project} from "./components/Project";

// The 'style' properties added in this file are to keep the footer at the bottom of the page, even when the page
// content is not enough to fill a page. See https://css-tricks.com/couple-takes-sticky-footer/#there-is-flexbox
export const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: '1 0 auto' }}>
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              <Homepage />
            </Route>
            <Route path="/bio" exact={true}>
              <Bio />
            </Route>
            <Route path="/project/:id" exact={true}>
              <Project />
            </Route>
            <Route path="*">
              This is not the URL you are looking for.
            </Route>
          </Switch>
        </Router>
      </div>

      <Footer style={{ flexShrink: 0 }} />
    </div>
  );
}
