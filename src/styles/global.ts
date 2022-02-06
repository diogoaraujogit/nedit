import { createGlobalStyle } from 'styled-components';
import 'reactjs-popup/dist/index.css';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font: inherit;
  }
  body, html {
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  button {
    cursor: pointer;
    border: none;
  }
  .MuiPaper-root {
    background-color: ${props =>
      props.theme.colors.dashboardBackground} !important;
  }
`;

export default GlobalStyles;
