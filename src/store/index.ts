import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';

import createRootReducer from './createRootReducer';

export const history = createBrowserHistory();

const middlewares = [thunkMiddleware, routerMiddleware(history)];
const composition = composeWithDevTools(applyMiddleware(...middlewares));

const initialState = {}

const store = createStore(createRootReducer(history), initialState, composition);

export default store;
