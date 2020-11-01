import { themeID } from './themeID';

export interface MyThemeProps {
  ID: themeID;
  color: {
    black: string;
    white: string;
    primary: string;
    secondary: string;
    tertiary: string;
    bodyBackground: string;
    bodyFont: string;
  };

  shadow: {
    shadowColor1: string;
    shadowColor2: string;
    shadowLight: string;
    shadow: string;
    shadowDark: string;
  };

  border: {
    radiusSmall: string;
    radius: string;
    radiusLarge: string;
  };
}
