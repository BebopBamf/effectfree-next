import { NextPage } from 'next';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';

const Blog: NextPage = () => (
  <>
    <Head>
      <title>EffectFree - Blog</title>
      <meta name="description" content="Effect Free blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="home">
      <Heading>Blog Page To be built...</Heading>
    </div>
  </>
);

export default Blog;
