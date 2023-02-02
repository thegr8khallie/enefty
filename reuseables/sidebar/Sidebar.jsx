import Link from "next/link"
import StyledSidebar from "./sidebar.styled"
import { HiOutlineHome, HiOutlineDocumentAdd, HiOutlineAdjustments, HiOutlineArchive, HiOutlineBookOpen } from 'react-icons/hi'


export const Sidebar = () => {
    const navElements = [
        {
            to: '/',
            text: 'Home',
            icon: HiOutlineHome

        },
        {
            to: '/create',
            text: 'Create',
            icon: HiOutlineDocumentAdd
        },
        {
            to: '/modify',
            text: 'Modify',
            icon: HiOutlineAdjustments
        },
        {
            to: '/nfts',
            text: 'NFT Archive',
            icon: HiOutlineArchive
        },
        {
            to: '/docs',
            text: 'How to Use',
            icon: HiOutlineBookOpen
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
