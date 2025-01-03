'use client';
import Image from 'next/image';
import dog from "../public/whatthe.jpg";
 
import { useState } from 'react';
 
export default function Project({ name, desc }) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

    return  <div className="m-4 bg-gray-500 rounded-lg text-white p-4 text-center">
            <h1 className="text-xl font-bold">{name ? name : 'Default name'}</h1>
            <p className="text-sm">{desc ? desc : 'This is a project description'}</p>
            <Image src={dog} alt={"dog"}></Image>;
            </div>;

}