
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './app.global.css';
import { Provider } from 'react-redux';
import App from './containers/App';

import './styles/app.css';
import configureStore from './store/configureStore';


const store = configureStore();

render(
  <AppContainer>
    <Provider store={store}>
      <div className="app">
        <field />
        <App />
      </div>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
