import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import './styles/normalize.css';
import './styles/global.scss';
import 'react-image-gallery/styles/css/image-gallery.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
