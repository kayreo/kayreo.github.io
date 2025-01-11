'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect  } from 'react';
import SideButton from './sideButton';
import ProjButton from './projButton';
import Link from 'next/link';

export default function Nav() {
    const [clicked, setClicked] = useState(false);
    const [width, setWidth] = useState(0);

    function handleResize() {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        // This will only run in the client-side (after the component is mounted)
        const handleResize = () => {
          setWidth(window.innerWidth); // Set the width based on the window size
        };
    
        // Set the initial width
        handleResize();
    
        // Add event listener to handle resize events
        window.addEventListener('resize', handleResize);
    
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []); // Empty dependency array to run this effect only once on mount
    

    function handleClick() {
        setClicked(!clicked);
    };    

    function handleProj(tgtProj) {
        const element = document.getElementById(tgtProj);

        const rect = element.getBoundingClientRect();
        
        const scrollPosition = rect.top + window.scrollY - 90;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    }

    if (width < 1080) {
        console.log("Small window");
        return  <div className="z-10 fixed bg-orange-500 text-white w-screen text-center">
        <div className="flex flex-row gap-x-4 justify-between mr-10">
            <p><FontAwesomeIcon icon={faBars} className="logo-btn"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        /></p>
        </div>
        {clicked ? (
            <div>
            <div className="z-10 navMenu flex-col justify-center content-start">
                <Link href="/"><p><SideButton title={"Home"}></SideButton></p></Link>
                <Link href="/projects"><p> <SideButton title={"Projects"}></SideButton></p></Link>
                <p><SideButton title={"Resume"}></SideButton></p> 
                <p><SideButton title={"Contact"}></SideButton> </p>
            </div>
            <div className="navMenu flex-row justify-center content-start">
                <p><Link href={"https://github.com/kayreo"} target={"_blank"}><FontAwesomeIcon icon={faGithub} className={"logo-btn" } /></Link>
                    <Link href={"https://www.linkedin.com/in/kaylarhan/"} target={"_blank"}><FontAwesomeIcon icon={faLinkedin} className={"logo-btn" } /> </Link>
                    <Link href={"https://kayreo.itch.io/"} target={"_blank"}><FontAwesomeIcon icon={faItchIo} className={"logo-btn" } /></Link></p>
            </div></div>
        ) : (<div></div>)}
    </div>; 
    } else {
        return  <div className="z-10 hidden lg:block fixed bg-orange-500 text-white w-screen text-center">
            <div className="flex flex-row gap-x-4 justify-between mr-10">
                <div className="ml-10"><Link href="/"><SideButton title={"Home"}></SideButton></Link>
                <Link href="/projects"><SideButton title={"Projects"}></SideButton></Link>
                <SideButton title={"Resume"}></SideButton>
                <SideButton title={"Contact"}></SideButton></div>
                <p><Link href={"https://github.com/kayreo"} target={"_blank"}><FontAwesomeIcon icon={faGithub} className={"logo-btn" } /></Link>
                <Link href={"https://www.linkedin.com/in/kaylarhan/"} target={"_blank"}><FontAwesomeIcon icon={faLinkedin} className={"logo-btn" } /> </Link>
                <Link href={"https://kayreo.itch.io/"} target={"_blank"}><FontAwesomeIcon icon={faItchIo} className={"logo-btn" } /></Link></p>
            </div>
        </div>;
    }
}