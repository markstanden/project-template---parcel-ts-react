/*
 * Import Dependancies
 */
import React from 'react';
import { createGlobalStyle } from 'styled-components';

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
  *
  * Main Theming
  *
  */
  $color-one: lightblue;
  $color-two: indigo;
  $color-three: darkblue;

  $shadowColor1: #000;
  $shadowColor2: #000;

  /* 
  *
  * Borders
  *
  */

  /* Border Radius Values */
  $radius-small: 0.1rem;
  $radius: 0.5rem;
  $radius-large: 1rem;

  /* Box/Text Shadow */
  /* x-axis y-axis blur color*/
  $shadow-light: 0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.2);
  $shadow: 0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.4);
  $shadow-dark: 0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.6);

  /* 
  *
  * Colours
  *
  */

  /* Basic colours */
  $black: #000;
  $white: #fff;
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

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: $color-two;
  } 
`;

/*
 *Import Components
 */

/*
 * type definitions / interfaces
 */

/** App functional component tooltip */
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <h1 className="App-header-main">The Super Amazing Mega-App</h1>
      <h4 className="App-header-sub">maybe...</h4>
    </>
  );
};

export default App;
