import Head from "next/head";
import { Banner, Nfts } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Enefty Homepage</title>
        <meta name="description" content="Enefty Landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Nfts />
    </>
  );
}
