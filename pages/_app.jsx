import React, { useEffect } from 'react';
import { Normalize } from 'styled-normalize';
import { ThemeProvider as MuiProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as StyledProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import Theme from 'styles/theme';

const muiTheme = createMuiTheme(Theme);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector(`#jss-server-side`);
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <StyledProvider theme={Theme}>
        <MuiProvider theme={muiTheme}>
          <Normalize />
          <GlobalStyles />
          <Component {...pageProps} />
        </MuiProvider>
      </StyledProvider>
    </React.Fragment>
  );
}

export default MyApp;
