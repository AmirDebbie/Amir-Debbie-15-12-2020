import { SET_THEME } from "../actionTypes";

let themeState = "light";

const previousTheme = localStorage.getItem("theme");
if (previousTheme) {
  themeState = previousTheme;
} else {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // Check default theme of the user
    themeState = "dark";
  }
}

export default function innerWidthReducer(state = themeState, action) {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem("theme", action.payload);
      return action.payload;
    default:
      return state;
  }
}
