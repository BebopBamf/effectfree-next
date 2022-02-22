import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
/*
import { groq } from 'next-sanity';

import type { Author } from '@sanity/schema';
import { getClient } from '@sanity/sanity.server';
*/

import Navbar from '@components/navbar';
/*
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
*/

const Home: NextPage = () => (
  <>
    <Head>
      <title>Effect Free</title>
      <meta name="description" content="Effect Free site homepage" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Heading>To Be Built...</Heading>
  </>
);

export default Home;
