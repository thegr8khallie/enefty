import StyledNav from "./Nav.styled"
import Link from "next/link";

export const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <li>Logo</li>
                <li><Link href='/dashboard'>Benefits</Link></li>
                <li><Link href='/dashboard'>How it works</Link></li>
                <li><Link href='/dashboard'>Our mission</Link></li>
                <li><Link href='/dashboard'>Create</Link></li>
                <li>Connect Wallet</li>
            </ul>
        </StyledNav>
    )
}