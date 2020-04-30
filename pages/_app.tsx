import { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../ui/theme';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
