import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: "Poppins", sans-serif;
    --font-secondary: "Roboto", sans-serif;
    --font-awesome: "Font Awesome 6 Free";

    --color-white: #FFFFFF;
    --color-sky-blue: #2575E8;
    --color-night-sky: #121213;
    --color-silver-lining: #cecece;
    --color-moonbeam-mist: #e0e0e0;
    --color-morning-mist: #f0f0f0;
    --color-blueberry-splash: #007AFF;
    --color-pewter-chime: #7B7B7B;

    --weight-light: 300;
    --weight-regular: 400;
    --weight-medium: 500;
    --weight-semi-bold: 600;
    --weight-bold: 700;
    --weight-extra-bold: 800;
    --weight-black: 900;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    overflow-x: hidden;
  }

  body, html {
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    font-family: var(--font-primary);
    font-size: 1.6rem;
    line-height: 1.7;
  }

  dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0;
    font-family: var(--font-secondary);
    font-size: 1.8rem;
    line-height: 3rem;
    margin-bottom: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a, h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
    color: inherit;
  }

  a, button {
    outline: none;
    transition: all .5s;
  }

  a:hover {
    color: var(--color-sky-blue);
    text-decoration: none;
  }

  ::selection {
    background: rgba(0,0,0,.7);
    color: #fff;
    text-shadow: none;
  }

  figure {
    margin: 0;
  }

`;
