import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

//dont want defalu but component function
import { VistiedContextProvider } from './store/visited-context'

ReactDOM.render(
  // want to render app in this root ... render the content
  <VistiedContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </VistiedContextProvider>,
  document.getElementById('root')
);
