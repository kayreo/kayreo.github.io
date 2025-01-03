'use client';
 
import SideButton from './sideButton';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import dog from "../public/whatthe.jpg";

export default function SideBar() {
    const buttonNames = ['Home', 'Projects'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }
    return  <div className="flex flex-row h-screen gap-x-4 min-h-screen content-start mt-20 pt-10 bg-gray-500 rounded-lg flex-grow text-white m-4 p-4 text-center">
        <h1 className="header">Hi, I'm Kayla!</h1>
        <Image src={dog} alt={"dog"} className="mx-auto rounded-full pb-[2%]"></Image>
        <p className="text-xl pb-[2%]">I am a senior computer science major at the University of Texas at Austin.</p>
        <div className="flex flex-col content-start">
            <p className="text-xl pb-[2%]">I'm looking for a software engineering position where I can tackle creative problems and discover innovative solutions.</p>
            <p className="text-xl"></p>
        </div>
    </div>;

}