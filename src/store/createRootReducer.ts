import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import applicationReducer from './application/reducers';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  app: applicationReducer
});

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>

export default createRootReducer;
