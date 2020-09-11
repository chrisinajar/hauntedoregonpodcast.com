import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledSheet = new ServerStyleSheet();
    const muiSheet = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => styledSheet.collectStyles(muiSheet.collect(<App {...props} />)),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {muiSheet.getStyleElement()}
            {styledSheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      styledSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Haunted Oregon Podcast</title>
          <meta property='og:title' content='Haunted Oregon Podcast' />
          <meta
            property='og:description'
            content='Join a husband and wife duo - the skeptic and the believer - as they take you through the spooky tales of Oregon!'
          />
          <meta property='og:image' content='https://hauntedoregonpodcast.com/images/logo.png' />

          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-177541353-1'></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-177541353-1');`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
