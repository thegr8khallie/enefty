import { StyledCarousel } from "../styled/Carousel.styled";

export const Carousel = () => {
    return (
        <StyledCarousel>
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className="img-container"></div>
            </a>
            <div className="flickity-container">
                <div className="flickity">
                    <div className="flickity-filler"></div>
                </div>
            </div>
            <div className="seek-container">
                <button></button>
                <div />
                <button></button>
            </div>
            <p>1<span>/3</span></p>
        </StyledCarousel>
    )
}
