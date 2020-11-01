/*
 * Import Dependancies
 */
import React, {
  FunctionComponent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MyThemeProps, themeID, lightTheme, darkTheme } from '../themes';

/** merged interfaces to allow correct typing of theme props. */
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // DefaultTheme is empty by default, so we can add properties here or add from the MyThemeProps.ts file.\
  export interface DefaultTheme extends MyThemeProps {
    toggleTheme: () => void;
  }
}

/*
 *Global Styles used throughout app.
 */
const GlobalStyle = createGlobalStyle`
  
  /* Used to theme the site, so mainly colour variables,
    or variables that will not break the site that the client
    might want to alter easily such as border radii 
    that are used throughout the site.
  */

    /*
  * BASIC SETUP
  *
  * Basic settings for sensible workflow
  * Based on what I have learnt from 
  * Jonas Schmedtmann's excellent advanced CSS course
  */

  html {
    /* Sensible sizing of html elements
    */
    box-sizing: border-box;

    /* (10px / 16px) so 1 rem equals 10px.
      This allows easy sizing as required pixel
      size can be converted easily by dividing by 10
    */
    font-size: 62.5%;
    
    /* Makes browser scrolling between page links look nice, not instant. */
    scroll-behavior: smooth;

  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    /* Puts default font size back to normal
      but 1 rem still equals 10px for easy
      relative box sizing
    */
    font-size: 1.6rem;

  /* From syntax.fm hasty treat on system fonts */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #333;
    margin: 0;
  }

  /* Make the image fill its container by default,
  but not increase the size of the container */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Basic Theming */
  body{
    background-color: ${({ theme }) => theme.color.bodyBackground};
    color: ${({ theme }) => theme.color.bodyFont};
  }
  /* link color to be as theme secondary color. */
  a {
    color: ${({ theme }) => theme.color.secondary}
  }

 
`;

/*
 *Import App Components
 */

/*
 * type definitions / interfaces
 */

/** The base component for the app */
const App: FunctionComponent = () => {
  /* Create a state variable, theme, responsible for toggling between themes. */
  const [theme, setTheme]: [
    MyThemeProps,
    Dispatch<SetStateAction<MyThemeProps>>
  ] = useState(lightTheme);

  const toggleTheme = () => {
    return setTheme((prevState) => {
      /* if the old state(theme) is light, then set new state(theme) to darkTheme,
              if not(presumably it's dark...) set to lightTheme */
      return prevState.ID === themeID.light ? darkTheme : lightTheme;
    });
  };

  return (
    <>
      <ThemeProvider
        theme={{
          ...theme,
          toggleTheme,
        }}
      >
        <GlobalStyle />

        <h1>The Super Amazing Mega-App</h1>
        <h4>maybe...</h4>
        <button onClick={toggleTheme}>Theme Toggle</button>
      </ThemeProvider>
    </>
  );
};

export default App;
