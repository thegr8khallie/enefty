import Head from "next/head";
import { CreateForm } from "../components";

export default function Create() {
    return (
        <>
            <Head>
                <title>Create</title>
                <meta name="description" content="Mint brand new digital assets" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CreateForm />
        </>
    );
}