import React, { useEffect, useRef, useState } from 'react'
import StyledNav from './navbar.styled'
import MyAlgoConnect from '@randlabs/myalgo-connect'

export const Navbar = () => {
    const account = useRef();
    const [addr, setAddr] = useState('')
    useEffect(() => {
        if (localStorage.getItem('address')) {
            setAddr(JSON.parse(localStorage.getItem('address')))
        }
    }, [])

    const handleWalletConnect = async () => {
        try {
            const myAlgoWallet = new MyAlgoConnect();
            account.current = await myAlgoWallet.connect();
            localStorage.setItem('address', account.current[0].address)
            setAddr(account.current[0].address);
        } catch (error) {
            console.error(error)
        }
    }

    const handleWalletDisconnect = () => {
        localStorage.removeItem('address');
    }
    return (
        <StyledNav>
            <div>
                {addr !== "" && <div><span>{addr}</span></div>}
                <button onClick={addr === "" ? handleWalletConnect : handleWalletDisconnect}>{addr === "" ? "Connect myAlgo Wallet" : 'Disconnect'}</button>
            </div>
        </StyledNav>
    )
}
