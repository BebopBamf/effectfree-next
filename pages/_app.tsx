import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from '@components/navbar';

import theme from '../src/theme';

/* eslint-disable react/jsx-props-no-spreading */
const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
