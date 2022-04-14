import { Button } from '@nextui-org/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import ServerStatus from '../components/ServerStatus';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>OpenSGS</title>
        <meta name="description" content="OpenSGS Game Entry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href=".">OpenSGS!</Link>
        </h1>
        <Button className={styles.button}>Join Game</Button>
        <ServerStatus className={styles.status} />
      </main>

      <footer className={styles.footer}>
        <a href="https://mogara.org" target="_blank" rel="noopener noreferrer">
          Powered by Mogara
        </a>
      </footer>
    </div>
  );
};

export default Home;
