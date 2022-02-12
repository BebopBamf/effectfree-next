import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/navbar';
import Banner from '../components/landing/banner';
import About from '../components/landing/about';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Effect Free</title>
      <meta name="description" content="Homepage of the effectfree blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="home">
      <Navbar />
      <Banner />
      <About />
    </div>
  </>
);

export default Home;
