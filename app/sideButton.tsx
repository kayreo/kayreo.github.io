'use client';
 
import { useState, useRef, useEffect } from 'react';
 
export default function SideButton({ title }) {
  const [likes, setLikes] = useState(0);
  const tgts = ["Home", "Projects", "Contact"];
 
  function handleClick() {
    if (tgts.includes(title)) {
        if (title == "Home") {
            console.log("Home button");
        }
        if (title == "Projects") {
            console.log("Projects button");
        }
        if (title == "Contact") {
            console.log("Contact button");
        }
    }
  }


  function handleJump(tgtID) {
    console.log("TGT: ", tgtID);
    if (["Home", "Projects"].includes(tgtID)) {
        const element = document.getElementById(tgtID);

        const rect = element.getBoundingClientRect();
        
        const scrollPosition = rect.top + window.scrollY - 90;

        // Scroll to the calculated position, stopping X pixels away
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth',
        });
    }
}
 
  return <button className="nav-btn bg-blue-500 rounded-lg m-4 screen text-white p-4 text-center" onClick={() => handleJump(title)}>{title ? title : 'Default button'}</button>;
}