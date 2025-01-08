// pages/-app.js
import '../ui/carousel.css';
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import banner from "../../public/banner.png";

export default function HomeBar() {
    return (
        <div>
            <Carousel>
                <div>
                    <Image src={banner} alt="image1"/>
                </div>
                <div>
                    <Image src={banner} alt="image1"/>
                </div>
            </Carousel>
        </div>
    );
};