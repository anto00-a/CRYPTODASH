import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import testStyle from './styles/main.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store,persistor} from './config/store'
import {PersistGate} from 'redux-persist/integration/react';




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
