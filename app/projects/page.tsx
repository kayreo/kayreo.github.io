import Nav from '../lib/nav';
import Project from '../lib/project';
 
export default function ProjectPage() {
  return (
    <div className= "flex-col justify-center min-h-screen content-start relative">
        <Nav />
        <div className="m-4 bg-orange-500 text-white w-screen p-8"> 
        </div>
        <div id="Project1"><Project name={"Project 1"} desc={"Desc1"}/></div>
        <div id="Project2"><Project name={"Project 2"} desc={"Desc2"}/></div>
        <div id="Project3"><Project name={"Project 3"} desc={"Desc3"}/></div>

    </div>
  );
}



