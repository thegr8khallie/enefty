import StyledNav from "./Nav.styled"
import Link from "next/link";
import { Button } from "../Reusable/Button";
import { Burger } from "../Reusable/Burger";
import { useState, useEffect } from "react";

export const Nav = () => {
    const [isClosed, setIsClosed] = useState(false)
    useEffect(() => {
        if (window.innerWidth > 480) {
            setIsClosed(true)
        }
    }, [])
    return (
        <StyledNav isClosed={isClosed}>
            <ul style={{ display: `${isClosed ? 'flex' : 'none'}` }}>
                <li>
                    <Link href='/'>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </Link>
                </li>
                <li><Link href='/dashboard'>Benefits</Link></li>
                <li><Link href='/dashboard'>How it works</Link></li>
                <li><Link href='/dashboard'>Our mission</Link></li>
                <li><Link href='/dashboard'>Create</Link></li>
                <li><Button>Connect Wallet</Button></li>
            </ul>
            <Burger
                isClosed={isClosed}
                setIsClosed={setIsClosed}
            />
        </StyledNav>
    )
}