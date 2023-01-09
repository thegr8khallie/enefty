import { StyledHero } from "../styled/Hero.styled";
import { Button } from '../../general/Reusable'

export const Hero = () => {
    return (
        <StyledHero>
            <h1>
                Create tamper proof <span>NFTs</span> for your digital products on the Algorand blockchain.
            </h1>
            <p>
                Don&#39;t know how to work with NFTs? All you have to do is a single upload and we will do all the heavy lifting for you!
            </p>
            <div className="btn-container">
                <Button gs>Get Started</Button>
                <Button create>Create NFTs</Button>
            </div>
        </StyledHero>
    )
}
