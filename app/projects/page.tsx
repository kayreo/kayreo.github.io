import Nav from '../lib/nav';
import Project from '../lib/project';
 
export default function ProjectPage() {
  return (
    <div className= "flex-col justify-center min-h-screen content-start relative">
        <Nav />
        <div className="m-4 bg-orange-500 text-white w-screen p-8"> 
        </div>
        <div id="Project1"><Project name={"Maid Rush Madness"} desc={"Maid Rush Madness is a solo video game project developed in Godot 4.0. You play as Serafina, a fledgling maid looking to make a name for herself by serving various eccentric clients. The game features simple controls that are easy to understand, a story mode featuring 5 levels, and an endless mode."} access={"Click here to play the game on Itch.io!"} accessLink={"https://kayreo.itch.io/maid-rush-madness"}/></div>
        <div id="Project2"><Project name={"Project 2"} desc={"Desc2"} access={""} accessLink={""}/></div>
        <div id="Project3"><Project name={"Project 3"} desc={"Desc3"} access={""} accessLink={""}/></div>

    </div>
  );
}



