
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
  return createStore(connectRouter(history)(reducers), initialState, compose(...enhancers));
}
