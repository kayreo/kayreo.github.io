'use client';
 
import { useState } from 'react';
 
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
 
  return <button className="bg-blue-500 rounded-lg m-4 screen text-white p-4 text-center" onClick={handleClick}>{title ? title : 'Default button'}</button>;
}