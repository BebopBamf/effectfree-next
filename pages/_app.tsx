import '../scss/styles.scss';
import type { AppProps } from 'next/app';

/* eslint-disable react/jsx-props-no-spreading */
const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
