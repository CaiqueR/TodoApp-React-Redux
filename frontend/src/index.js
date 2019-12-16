import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';


import logger from 'redux-logger';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './main/reducers/index.redux';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

const store = createStore(reducers, applyMiddleware(thunk, multi, promise, logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
