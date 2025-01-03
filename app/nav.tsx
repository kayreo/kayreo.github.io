'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SideButton from './sideButton';


export default function Nav() {
    return  <div className="fixed bg-orange-500 text-white w-screen text-center">
        <div className="flex flex-row gap-x-4 justify-between mr-10">
            <p className="ml-10"><SideButton title={"Home"}></SideButton> <SideButton title={"Projects"}></SideButton> <SideButton title={"Resume"}></SideButton> <SideButton title={"Contact"}></SideButton> </p>
            <p><FontAwesomeIcon icon={faGithub} className="side-btn" /> <FontAwesomeIcon icon={faLinkedin} className="side-btn" /> <FontAwesomeIcon icon={faItchIo} className="side-btn" /></p>
        </div>
</div>;

}