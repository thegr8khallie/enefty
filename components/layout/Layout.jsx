import StyledLayout from "./layout.styled"
import { Sidebar } from '../../reuseables'

export const Layout = ({ children }) => {

    return (
        <StyledLayout>
            <Sidebar />
            <section>{children}</section>
        </StyledLayout>
    )
}

