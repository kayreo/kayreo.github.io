'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect  } from 'react';
import SideButton from './sideButton';


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
        setClicked(!clicked); // Toggle the state on click
    };    

    if (width < 1080) {
        console.log("Small window");
        return  <div className="fixed bg-orange-500 text-white w-screen text-center">
        <div className="flex flex-row gap-x-4 justify-between mr-10">
            <p><FontAwesomeIcon icon={faBars} className="logo-btn"
            onClick={handleClick} // onClick event
            style={{ cursor: 'pointer' }} // Make the icon look clickable
        /></p>
        </div>
        {clicked ? (
            <div className="flex-col justify-center content-start">
                <p><SideButton title={"Home"}></SideButton></p>
                <p> <SideButton title={"Projects"}></SideButton></p> 
                <p><SideButton title={"Resume"}></SideButton></p> 
                <p><SideButton title={"Contact"}></SideButton> </p>
            </div>
        ) : (<div></div>)}
    </div>; 
    } else {
        return  <div className="hidden lg:block fixed bg-orange-500 text-white w-screen text-center">
            <div className="flex flex-row gap-x-4 justify-between mr-10">
                <p className="ml-10"><SideButton title={"Home"}></SideButton> <SideButton title={"Projects"}></SideButton> <SideButton title={"Resume"}></SideButton> <SideButton title={"Contact"}></SideButton> </p>
                <p><FontAwesomeIcon icon={faGithub} className="logo-btn" /> <FontAwesomeIcon icon={faLinkedin} className="logo-btn" /> <FontAwesomeIcon icon={faItchIo} className="logo-btn" /></p>
            </div>
        </div>;
    }
}