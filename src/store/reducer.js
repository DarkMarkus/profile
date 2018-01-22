import { combineReducers } from 'redux';

import app, { initialState as appInitialState } from '../components/App/appReducer';

export const initialState = {
  app: appInitialState,
};

export default combineReducers({
  app,
});
