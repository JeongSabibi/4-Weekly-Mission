import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --primary: #6d6afe;
  --red: #ff5b56;
  --black: #111322;
  --white: #ffffff;

  --gray100: #373740;
  --gray60: #9fa6b2;
  --gray20: #ccd5e3;
  --gray10: #e7effb;

  --background: #f0f6ff;
}

* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

html,
body {
  font-size: 62.5%;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

input:focus {
  outline: none;
}

button {
  border: none;
  padding: unset;
  background-color: unset;
  cursor: pointer;
}

`;

export default GlobalStyle;
