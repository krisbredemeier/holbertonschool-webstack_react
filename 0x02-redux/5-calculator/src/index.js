import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { combineReducers } from 'redux';
import number from './reducers/index/jsx'

const allReducers = combineReducers({
  number: number
});

const store = createStore(
  allReducers,
  applyMiddleware()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
