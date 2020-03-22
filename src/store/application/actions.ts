// Note: AppThunk is just a convenience type that hides what redux-thunk returns.
// Check that file if you want to see the complete return type
import { AppThunk } from "../AppThunk";

import {
  TOGGLE_DARK_MODE,
  TOGGLE_DRAWER,
  SHOW_GLOBAL_MESSAGE,
  SHOW_GLOBAL_SUCCESS_MESSAGE,
  SHOW_GLOBAL_ERROR_MESSAGE
} from "./types";

// Any asyncronous call here must be called with await
export const toggleDarkMode = (
  darkMode: boolean
): AppThunk => async dispatch => {
  dispatch({
    type: TOGGLE_DARK_MODE,
    payload: { darkMode }
  });
};

export const toggleDrawer = (open: boolean): AppThunk => async dispatch => {
  dispatch({
    type: TOGGLE_DRAWER,
    payload: { open }
  });
};

export const showGlobalMessage = (
  message: string
): AppThunk => async dispatch => {
  dispatch({
    type: SHOW_GLOBAL_MESSAGE,
    payload: { message }
  });
};

export const showGlobalSuccessMessage = (
  message: string
): AppThunk => async dispatch => {
  dispatch({
    type: SHOW_GLOBAL_SUCCESS_MESSAGE,
    payload: { message }
  });
};

export const showGlobalErrorMessage = (
  message: String
): AppThunk => async dispatch => {
  dispatch({
    type: SHOW_GLOBAL_ERROR_MESSAGE,
    payload: { message }
  });
};
