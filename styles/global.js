import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Captain Howdy Regular';
    src: local('Captain Howdy Regular'), url(font.ttf) format('truetype');
  }

  body {
    font-family: "Captain Howdy Regular";
    position: relative;
    min-height: 100vh;

    background: black;
    background-image: url(/images/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${({ theme }) => theme.colors.mainYellow};
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
