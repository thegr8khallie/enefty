import styled from "styled-components"

const StyledLoader = styled.div`
    svg {
        width: 12rem;
        height: 12rem;
        animation: spin 1s linear infinite;
    }
    circle {
        fill: none;
        stroke: #d533e7;
        stroke-width: .3rem;
        stroke-linecap: round;
        animation: dash 2.5s ease-in-out infinite;
    }
    @keyframes spin {
        100% {
            rotate: 390deg;
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`

const Loader = () => {
    return (
        <StyledLoader>
            <svg viewBox="0 0 50 50">
                <circle
                    cx='25'
                    cy='25'
                    r='20'
                />
            </svg>
        </StyledLoader>
    )
}

export default Loader