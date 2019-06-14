import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import think from './middleware/think';
import types from './actions/types';
import { checkAuth } from './actions';
import './style.scss';

import App from './components/app';

const store = createStore(rootReducer, applyMiddleware(think));

if (localStorage.getItem('loggedIn') === 'true') {
  console.log('Made it here');
  store.dispatch({
      type: types.LOG_IN,
      email: 'loading'
  });

  checkAuth()(store.dispatch);
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
