'use client';
 
import SideButton from './sideButton';
import { useState } from 'react';
 
export default function SideBar() {
    const buttonNames = ['Home', 'Projects', 'Contact'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }
    return  <div className="sticky top-4 min-h-screen bg-gray-500 rounded-lg flex-grow text-white m-4 p-4 text-center">
        <h1 className="text-xl font-bold">Hello, Tailwind!</h1>
        <p className="text-sm">This is a Tailwind-styled component in TSX.</p>
        <ul>
        {buttonNames.map((name) => (
            <li key={name}>
            <SideButton title={name}></SideButton>
            </li>
        ))}
        </ul>
    </div>;

}