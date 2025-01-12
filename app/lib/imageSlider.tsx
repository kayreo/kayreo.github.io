// pages/-app.js
import '../ui/carousel.css';
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import maid0 from "/maid0.png";
import maid1 from "/maid1.png";
import maid2 from "/maid2.png";

export default function ImageSlider({whichCarousel}) {
    if (whichCarousel == "Maid Rush Madness") {
        return (
            <div>
                <Carousel showThumbs={false}>
                    <div>
                        <Image src={maid0} alt="Maid Rush Madness Logo"/>
                    </div>
                    <div>
                        <Image src={maid1} alt="Gameplay of Maid Rush Madness"/>
                    </div>
                    <div>
                        <Image src={maid2} alt="Dialogue from Maid Rush Madness"/>
                    </div>
                </Carousel>
            </div>
        );
    }
};