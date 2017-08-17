/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import reducer from './reducers';
import './index.css';

const history = createBrowserHistory();

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
