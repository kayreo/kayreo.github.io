'use client';
 
import { useState } from 'react';

import Image from 'next/image';
import portrait from "../public/Headshot.jpg";

export default function HomeBar() {
    const buttonNames = ['Home', 'Projects'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }
    return  <div id="Home" className="flex flex-col gap-x-4 content-start bg-gray-500 rounded-lg flex-grow text-white m-4 p-4 text-center">
        <h1 className="header">Hi, I'm Kayla!</h1>
        <Image src={portrait} alt={"/Headshot.jpg"} className="mx-auto rounded-full pb-[2%]"></Image>
        <p className="text-xl pb-[2%]">I am a senior computer science major at the University of Texas at Austin.</p>
        <p className="text-xl pb-[2%]">I primarily program in languages such as Python, C++, C#, and Java. I also have experience working on projects that use Javascript and Swift! Some other technologies I'm familiar with are the Unity, Godot, and Unreal engines, along with WebGL and Jupyter Notebook.</p>
        <p className="text-xl pb-[2%]">I am an active participant in the UTCS community. I have held multiple leadership positions in the UTCS department, such as being a TA for courses that teach nonmajor computer science students in topics such as data structures and graphics, a mentor for first-year UTCS students, and a summer camp counsellor for the UTCS Summer Academies. I also have participated in events and hackathons run by student organizations like Women in Computer Science (WiCS).</p>
        <p className="text-xl pb-[2%]">My main interests are software engineering and gameplay programming. I hope to find a job where I can use the technical and personal skills I have acquired at UT Austin in an exciting, impactful project that changes the world. Aside from technical prowess, community is extremely important to me. I love working in a diverse, motivated team where I can learn and grow into an experienced software developer.</p>
    </div>;
}