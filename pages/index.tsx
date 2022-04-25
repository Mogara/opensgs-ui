import { Button } from '@nextui-org/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import ServerStatus from '../components/ServerStatus';

const Home: NextPage = () => {
  return (
    <div className="py4">
      <Head>
        <title>OpenSGS</title>
        <meta name="description" content="OpenSGS Game Entry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen pt-16 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl">
          Welcome to{' '}
          <Link href="/">
            <a className="text-blue-500 hover:underline focus:underline active:underline">
              OpenSGS!
            </a>
          </Link>
        </h1>
        <Button className="my-16">Join Game</Button>
        <ServerStatus className="mt-auto self-start" />
      </main>

      <footer className="flex flex-1 py-8 border-t border-neutral-200 justify-center items-center">
        <a
          className="text-inherit"
          href="https://mogara.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Mogara
        </a>
      </footer>
    </div>
  );
};

export default Home;
