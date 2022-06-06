import Head from 'next/head';
import React from 'react';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Audy Wisuda Pratama Portfolio' />
      </Head>
      <PortfolioCard />
    </>
  );
}
