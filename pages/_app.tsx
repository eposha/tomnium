import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles/theme';
import {ApolloProvider} from '@apollo/client';
import {useApollo} from '@/lib/apolloClient';
import useSound from 'use-sound';
import {DNA_TOKEN_FROM_ADMIN, COOKIES_TOKEN_NAME} from '@/lib/apolloClient';
import {setCookie, parseCookies} from 'nookies';

const notificationSound = '/sounds/notification-sound.mp3';

import 'styles/global.css';
import {MainLayout} from '@/components/layout';
import Head from 'next/head';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({Component, pageProps}: AppPropsWithLayout) => {
  const apolloClient = useApollo(pageProps);
  const [play] = useSound(notificationSound, {
    interrupt: true,
  });
  const notify = () => play();

  const adminCookies = parseCookies()[DNA_TOKEN_FROM_ADMIN];

  if (adminCookies) {
    setCookie(null, COOKIES_TOKEN_NAME, adminCookies, {path: '/'});
  }

  const getLayout =
    Component.getLayout ??
    ((page: ReactNode) => (
      <>
        <MainLayout>{page}</MainLayout>{' '}
        <div
          style={{position: 'fixed', width: '100vw', height: '100vh'}}
          onClick={notify}
        />
      </>
    ));

  return (
    <>
      <Head>
        <title>Woman Insight</title>
        <link rel='shortcut icon' href='/icons/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
