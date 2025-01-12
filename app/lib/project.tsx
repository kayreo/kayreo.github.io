'use client';
import Image from 'next/image';
import dog from "../../public/whatthe.jpg";
import ImageSlider from "./imageSlider"
import { useState } from 'react';
import Link from 'next/link';
import ProjectInfo from './projectInfo';
 
export default function Project({ name, desc, access, accessLink }) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

    return  <div className="m-4 bg-gray-500 rounded-lg text-white p-4 text-center">
            <h1 className="header font-bold">{name ? name : 'Default name'}</h1>
            <ImageSlider whichCarousel={name}/>
            <p className="p-4"></p>
            <ProjectInfo whichProject={name} />
            <p className="p-4 text-xl">{desc ? desc : 'This is a project description'}</p>
            <Link href={accessLink ? accessLink : "/notFound"} target={"_blank"}><p className="accessLink">{access ? access : 'This is where they can access the project'}</p></Link>
            </div>;

}