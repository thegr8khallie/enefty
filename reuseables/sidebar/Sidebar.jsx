import Link from "next/link"
import StyledSidebar from "./sidebar.styled"
import { FaHome, FaPlus, FaCog, FaDatabase, FaBook } from 'react-icons/fa'


export const Sidebar = () => {
    const navElements = [
        {
            to: '/',
            text: 'Home',
            icon: FaHome

        },
        {
            to: '/create',
            text: 'Create',
            icon: FaPlus
        },
        {
            to: '/modify',
            text: 'Modify',
            icon: FaCog
        },
        {
            to: '/nfts',
            text: 'NFT Archive',
            icon: FaDatabase
        },
        {
            to: '/docs',
            text: 'How to Use',
            icon: FaBook
        }

    ]
    return (
        <StyledSidebar>
            <ul>
                <li>
                    <img src="./favicon.ico" alt="Logo" />
                </li>
                {navElements.map((i, j) => (
                    <li key={`element${j}`}>
                        <Link href={i.to}>
                            {<i.icon />}
                            <p style={{ fontSize: '1rem' }}>{i.text}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledSidebar>
    )
}
