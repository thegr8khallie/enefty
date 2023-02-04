# Enefty: An NFT Tooling software for Algorand NFTs

Enefty is a simpple GUI tool for minting new NFTs the conform to the ARC69 standard for Algorand NFTs and also, for modifying the metadata of existing NFTs. After minting, the new digital asset will be sent directly to the wallet connected to the tool. This project was built using NextJS: a framework built on react, styled components for styling, the MyAlgo Wallet SDK for signing transactions, NFT.Storage for IPFS hosting and the Javascript Algorand SDK. At the moment, this tool is only available on the Algorand testnet.

## Running this tool

There are two ways to use this tool;

1. ### On your Local Machine

- Clone this machine to repository to your local machine using:

> git clone https://github.com/thegr8khallie/enefty

- Cd into the project directory and run:

> npm start
>
> > Runs the app in the development mode.\
> > Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. ### On the web

Use this tool live on the web [here](https://enefty.netlify.app)

## How to use

1. Firstly, connect your wallet by clicking on the "Connect MyAlgo Wallet" button at the top right corner of the screen.

2. In order to mint an NFT, click on the "Create" button on the sidebar and provide the required metadata for your NFT and then submit the form. After the confirmation message that the asset has been minted, you can check your myAlgo Wallet for your NFT.

3. In order to modify the metadata of an existing NFT, click on the "Modify" button on the sidebar, fill out the form and submit, just like it is stated above. However, make sure that the NFT to be modified is owned by you I.e has the address connected to the webapp as the manager address of the NFT asset.

## Live Demo

The live Demo can be found on [Youtube](https://youtu.be/lAWD5LgHiZg)
