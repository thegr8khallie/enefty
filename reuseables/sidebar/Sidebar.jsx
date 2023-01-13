import Link from "next/link"
import StyledSidebar from "./sidebar.styled"

export const Sidebar = () => {
    const navElements = [
        {
            to: '/create',
            icon: 'CR'
        },
        {
            to: '/',
            icon: 'HO'
        }
    ]
    return (
        <StyledSidebar>
            <ul>
                <li>
                    <img src="./favicon.ico" alt="Logo" />
                </li>
                <hr />
                {navElements.map((i, j) => (
                    <li key={`element${j}`}>
                        <Link href={i.to}>
                            {i.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledSidebar>
    )
}
