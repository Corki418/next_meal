import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider, CSSBaseline } from '@trendmicro/react-styled-ui';

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      reduxStore,
    } = this.props;

    return (
      <ThemeProvider>
        <CSSBaseline />
        <CookiesProvider>
          <Container>
            <Provider store={reduxStore}>
              <Component {...pageProps} />
            </Provider>
          </Container>
        </CookiesProvider>
      </ThemeProvider>
    );
  }
}

export default withReduxStore(MyApp);
