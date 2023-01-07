import StyledNav from "./Nav.styled"
import Link from "next/link";
// import Image from "next/image";
import { Button } from "../Reusable/Button";

export const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link href='/'>
                        <div></div>
                        <div></div>
                    </Link>
                </li>
                <li><Link href='/dashboard'>Benefits</Link></li>
                <li><Link href='/dashboard'>How it works</Link></li>
                <li><Link href='/dashboard'>Our mission</Link></li>
                <li><Link href='/dashboard'>Create</Link></li>
                <li><Button>Connect Wallet</Button></li>
            </ul>
        </StyledNav>
    )
}