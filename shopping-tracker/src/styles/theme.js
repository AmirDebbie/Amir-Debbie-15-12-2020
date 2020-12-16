import { lightTheme, darkTheme } from "./themes";

export const getTheme = (currentTheme) => {
  switch (currentTheme) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
  }
};
