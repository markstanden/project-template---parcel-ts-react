import { MyThemeProps } from './MyThemeProps';
import { themeID } from './themeID';

export const darkTheme: MyThemeProps = {
  ID: themeID.dark,
  color: {
    black: '#000',
    white: '#fff',
    primary: 'black',
    secondary: 'midnightblue',
    tertiary: 'indigo',
    bodyBackground: 'black',
    bodyFont: 'white',
  },

  shadow: {
    shadowColor1: '#000',
    shadowColor2: '#444',
    shadowLight: '0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.2)',
    shadow: '0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.4)',
    shadowDark: '0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.6)',
  },

  border: {
    radiusSmall: '0.1rem',
    radius: '0.5rem',
    radiusLarge: '1rem',
  },
};
