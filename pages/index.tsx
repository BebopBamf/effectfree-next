import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { groq } from 'next-sanity';

import { urlFor } from '../lib/sanity';
import { getClient } from '../lib/sanity.server';

import Navbar from '../components/navbar';
import Banner from '../components/landing/banner';
import About from '../components/landing/about';

const emendozaQuery = groq`
*[_type == "author" && slug.current == "emendoza"] {
  _id,
  slug,
  name,
  image,
  description,
  bio
}
`;

export const getStaticProps = async ({ params, preview = false }) {
  const emendoza = await getClient(preview).fetch(emendozaQuery);

  return {
    props: {
      preview,
      data: { emendoza },
    }
  }
}

const Home: NextPage = () => {
  return (
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
};
export default Home;
