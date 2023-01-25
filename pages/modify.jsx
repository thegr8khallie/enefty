import Head from "next/head";
import { ModifyForm } from "../components";

export default function Modify() {
    return (
        <>
            <Head>
                <title>Modify</title>
                <meta name="description" content="Edit Existing NFT Metadata" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ModifyForm />
        </>
    );
}