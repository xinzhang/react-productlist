import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {loadProducts} from './actions/productActions';

const store = configureStore();
console.log(store.getState())
store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
