import { SET_THEME } from "../actionTypes";

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};
