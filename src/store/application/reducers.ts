import { ApplicationState, ApplicationActionTypes } from './types';
import {
  TOGGLE_DARK_MODE,
  TOGGLE_DRAWER,
  SHOW_GLOBAL_MESSAGE,
  SHOW_GLOBAL_SUCCESS_MESSAGE,
  SHOW_GLOBAL_ERROR_MESSAGE
} from './types';

const initialState : ApplicationState = {
  themeMode: 'dark',
  drawerOpen: false,
  globalMessage: '',
  globalErrorMessage: '',
  globalSuccessMessage: ''
}

export default function applicationReducer(state = initialState, action: ApplicationActionTypes) {
  switch(action.type) {
    case TOGGLE_DARK_MODE:
      return {...state, themeMode: action.payload.darkMode ? 'dark' : 'light'};
    case TOGGLE_DRAWER:
      return {...state, drawerOpen: action.payload.open};
    case SHOW_GLOBAL_MESSAGE:
      return {...state, globalMessage: action.payload.message};
    case SHOW_GLOBAL_SUCCESS_MESSAGE:
      return {...state, globalSuccessMessage: action.payload.message};
    case SHOW_GLOBAL_ERROR_MESSAGE:
      return {...state, globalErrorMessage: action.payload.message}
    default:
      return state;
  }
}
