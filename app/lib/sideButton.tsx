'use client';
 
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function SideButton({ title }) {
  const [likes, setLikes] = useState(0);
  const tgts = ["Home", "Projects", "Contact"];

  function handleJump(tgtID) {
    console.log("TGT: ", tgtID);
    if (tgtID == "Resume") {
        window.open("/Han_Resume.pdf", "_blank");
    } else if (tgtID == "Contact") {
        window.location.href = 'mailto:kaylarhan@gmail.com'
    }
}
 
  return <button className="nav-btn bg-blue-500 rounded-lg m-4 screen text-white p-4 text-center" onClick={() => handleJump(title)}>{title ? title : 'Default button'}</button>;
}