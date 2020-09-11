import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Captain Howdy Regular';
    src: local('Captain Howdy Regular'), url(font.ttf) format('truetype');
  }

  html, body {
    position: relative;
    min-height: 100%;
    min-width: 100%;
    display: flex;

    font-family: "Captain Howdy Regular";
    background: black;
    background-image: url(/images/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${({ theme }) => theme.colors.mainYellow};
  }

  #__next {
    min-height: 100%;
    min-width: 100%;
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
