import Head from "next/head";
import Modal from '../utils/Modal';
import { useToggle } from '../hooks'

export default function Nfts() {
    const [isModalOpen, toggleIsModalOpen] = useToggle();

    return (
        <>
            <Head>
                <title>Nfts</title>
                <meta name="description" content="See NFTs created" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <button onClick={toggleIsModalOpen} type="button">Open Modal</button>
                <Modal
                    isModalOpen={isModalOpen}
                    toggleIsModalOpen={toggleIsModalOpen} />
            </div>
        </>
    );
}