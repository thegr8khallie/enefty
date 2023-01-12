import { StyledCarousel } from "../styled/Carousel.styled";
import AIGoanna from '../../../public/assets/Al Goanna 059.jpeg';
import SeaGod from '../../../public/assets/SeaGod-Akkorokamui 001.jpeg';
import CGF from '../../../public/assets/cgf.jpeg';
import LeMat from '../../../public/assets/LE MAT.png';
import MONSTiiBarf from '../../../public/assets/MONSTiiBarf.png';
import Yielding from '../../../public/assets/yielding.png';
import SMC from '../../../public/assets/smc.png';
import Image from "next/image";


export const Carousel = () => {
    const nftData = [
        {
            unitName: "YLDGR320",
            asa: 313003785,
            name: "Yieldling Rare #320",
            img: Yielding
        },
        {
            unitName: "CGF4294",
            asa: 584171434,
            name: "CGF #4294",
            img: CGF
        },
        {
            unitName: "tarot00",
            asa: 929083100,
            name: "LE MAT",
            img: LeMat
        },
        {
            unitName: "goan059",
            asa: 334794211,
            name: "Al Goanna 059",
            img: AIGoanna
        },
        {
            unitName: "MiiBarf1",
            asa: 635361518,
            name: "MONSTiiBarf",
            img: MONSTiiBarf
        },
        {
            unitName: "SEAG-001",
            asa: 997207926,
            name: "SeaGod-Akkorokamui 001",
            img: SeaGod
        },
        {
            unitName: "SMC7846",
            asa: 713812699,
            name: "SMC #7846",
            img: SMC
        },
    ];
    return (
        <StyledCarousel>
            <div className="slider-container">
                {
                    nftData.map((i, j) => {
                        return (
                            <a href="http://" target="_blank" rel="noopener noreferrer" key={`nft${j}`}>
                                <div className="img-container" style={{ display: 'none' }}>
                                    <Image src={i.img} alt={i.name} />
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="flickity-container">
                {
                    nftData.map((i, j) => {
                        return (
                            <div className="flickity" key={`flickity${j}`}>
                                <div className="flickity-filler"></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="seek-container">
                <button>Next</button>
                <div />
                <button>Prev</button>
            </div>
            <p>1<span>/3</span></p>
        </StyledCarousel>
    )
}
