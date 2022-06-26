import {createGlobalStyle} from 'styled-components';

const GlobalLayoutStyle = createGlobalStyle`
/* Only using * omits pseudo elements so specifically include these  */
*,
*:before,
*:after {
  box-sizing: border-box;
  // color: #131415;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  outline: none;
  text-decoration: none;
}

button,
input[type='submit'],
input[type='reset'] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

`;

export default GlobalLayoutStyle;
