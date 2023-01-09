import Head from "next/head";
import { Hero } from "../components/index/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Enefty Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}
