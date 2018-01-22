import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-intl-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
