import React, { useRef, useState } from 'react'
import StyledNav from './navbar.styled'
import MyAlgoConnect from '@randlabs/myalgo-connect'
import algosdk from 'algosdk'

export const Navbar = () => {
    const account = useRef();
    const [addr, setAddr] = useState('')

    const handleWalletConnect = async () => {
        try {
            const myAlgoWallet = new MyAlgoConnect();
            account.current = await myAlgoWallet.connect();
            setAddr(account.current[0].address);
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <StyledNav>
            <div>
                {addr !== "" && <div><span>{addr}</span></div>}
                <button onClick={handleWalletConnect}>{addr === "" ? "Connect myAlgo Wallet" : 'Disconnect'}</button>
            </div>
        </StyledNav>
    )
}
