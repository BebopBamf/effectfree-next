import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { groq } from 'next-sanity';

import { getClient } from '@lib/sanity.server';
import { urlFor } from '@lib/sanity';

import Navbar from '@components/navbar';
import Banner from '@components/landing/banner';
import About from '@components/landing/about';

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

export const getStaticProps: GetStaticProps = async (context) => {
  const { preview = false } = context;
  const emendoza = await getClient(preview).fetch(emendozaQuery);

  return {
    props: {
      preview,
      userData: { emendoza },
    },
  };
};

const Home: NextPage = (props) => {
  const { preview, userData } = props;

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
