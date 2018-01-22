import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers, { initialState } from './reducer';

export const history = createBrowserHistory();

const middlewares = [
  thunkMiddleware,
  routerMiddleware(history),
];

const enhancers = [
  applyMiddleware(...middlewares),
];

export default function configureStore() {
  const store = createStore(connectRouter(history)(reducers), initialState, compose(...enhancers));

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept(
      './reducer',
      () => store.replaceReducer(require('./reducer').default), // eslint-disable-line global-require
    );
  }

  return store;
}
