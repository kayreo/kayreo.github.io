import LikeButton from './like-button';
import HomeBar from './homebar';
import Project from './project';
import Nav from './nav';
import './ui/global.css';

function Header({ title }) {
  return <div id={title} className="m-4 bg-blue-500 rounded-lg text-white p-4 text-center"> 
    <h1 className="header">{title ? title : 'Default title'}</h1>
    <p className="text-sm">This is a Tailwind-styled component in TSX.</p>
    </div>;
}
 
export default function HomePage() {
  let openSide: boolean = true;
  return (
    <div className= "flex-col justify-center min-h-screen content-start relative">
        <Nav />
        <div className="m-4 bg-orange-500 text-white w-screen p-8"> 
        </div>
        <HomeBar />
        <Header title={"Projects"} />
        <Project name={"Project 1"} desc={"Desc1"}/>
        <Project name={"Project 2"} desc={"Desc2"}/>
        <Project name={"Project 3"} desc={"Desc3"}/>
        <Header title={"Contact"} />
    </div>
  );
}