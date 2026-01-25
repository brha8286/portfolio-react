import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { Homepage } from './components/Homepage';
import {Footer} from "./components/Footer";
import {Project} from "./components/Project";

// The 'style' properties added in this file are to keep the footer at the bottom of the page, even when the page
// content is not enough to fill a page. See https://css-tricks.com/couple-takes-sticky-footer/#there-is-flexbox
export const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: '1 0 auto', overflow: 'hidden' }}>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="*" element={<div>This is not the URL you are looking for.</div>} />
          </Routes>
        </Router>
      </div>

      <Footer style={{ flexShrink: 0 }} />
    </div>
  );
}
