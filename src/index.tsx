import React from 'react';
import ReactDom from 'react-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import reducer from './reducers';

const store = createStore(reducer);

ReactDom.render(
  // @ts-ignore
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
