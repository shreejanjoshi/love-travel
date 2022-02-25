import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

//dont want defalu but component function
import { VisitedContextProvider } from './components/store/visited-context'

ReactDOM.render(
  // want to render app in this root ... render the content
  <VisitedContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </VisitedContextProvider>,
  document.getElementById('root')
);
