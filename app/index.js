// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

import './assets/src/semantic.less'
import './assets/src/theme.less'

//test case
import { connectDB } from './actions/connect'

const store = configureStore();

store.dispatch(connectDB())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
