import StyledLayout from "./layout.styled"
import { Navbar, Sidebar } from '../../reuseables'

export const Layout = ({ children }) => {

    return (
        <StyledLayout>
            <Sidebar />
            <section>
                <Navbar />
                {children}
            </section>
        </StyledLayout>
    )
}

