import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { groq } from 'next-sanity';

import type { Author } from '@sanity/schema';
import { getClient } from '@sanity/sanity.server';

import Navbar from '@components/navbar';
import Banner from '@components/landing/banner';
import About from '@components/landing/about';

const emendozaQuery = groq`
*[_type == "author" && slug.current == "emendoza"] {
  slug,
  name,
  image,
  description,
  bio
}
`;

type QueryResult = Array<Author>;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const result = await getClient(preview).fetch<QueryResult>(emendozaQuery);

  const data = result[0];

  return {
    props: {
      preview,
      data,
    },
  };
};

type HomeProps = {
  data: Author;
};

const Home: NextPage<HomeProps> = ({ data }) => {
  const { name, description, slug } = data;

  return (
    <>
      <Head>
        <title>Effect Free</title>
        <meta name="description" content="Homepage of the effectfree blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
        <Navbar />
        <Banner authorName={name} description={description} slug={slug} />
        <About />
      </div>
    </>
  );
};
export default Home;
