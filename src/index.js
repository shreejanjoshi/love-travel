import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  // want to render app in this root ... render the content
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
