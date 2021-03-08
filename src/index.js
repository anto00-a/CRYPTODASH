import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import testStyle from './styles/main.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers'

const store = createStore(allReducers)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
