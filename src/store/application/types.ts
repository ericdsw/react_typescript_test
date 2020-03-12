
// Reducer state description
export interface ApplicationState {
  themeMode: string,
  drawerOpen: boolean,
  globalMessage: string,
  globalErrorMessage: string,
  globalSuccessMessage: string,
}

export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const SHOW_GLOBAL_MESSAGE = "SHOW_GLOBAL_MESSAGE";
export const SHOW_GLOBAL_SUCCESS_MESSAGE = "SHOW_GLOBAL_SUCCESS_MESSAGE";
export const SHOW_GLOBAL_ERROR_MESSAGE = "SHOW_GLOBAL_ERROR_MESSAGE";

export interface ToggleDarkModeAction {
  type: typeof TOGGLE_DARK_MODE,
  payload: { darkMode: boolean }
};

export interface ToggleDrawer {
  type: typeof TOGGLE_DRAWER,
  payload: { open: boolean }
}

export interface ShowGlobalMessage {
  type: typeof SHOW_GLOBAL_MESSAGE,
  payload: { message: string }
}

export interface ShowGlobalSuccessMessage {
  type: typeof SHOW_GLOBAL_SUCCESS_MESSAGE,
  payload: { message: string }
}

export interface ShowGlobalErrorMessage {
  type: typeof SHOW_GLOBAL_ERROR_MESSAGE,
  payload: { message: string }
}

export type ApplicationActionTypes = ToggleDarkModeAction | ToggleDrawer | ShowGlobalMessage | ShowGlobalSuccessMessage | ShowGlobalErrorMessage;
