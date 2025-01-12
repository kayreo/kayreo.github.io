import LikeButton from './lib/like-button';
import HomeBar from './lib/homebar';
import Project from './lib/project';
import Nav from './lib/nav';
import './ui/global.css';

function Header({ title, desc }) {
  return <div id={title} className="m-4 bg-blue-500 rounded-lg text-white p-4 text-center"> 
    <h1 className="header">{title ? title : 'Default title'}</h1>
    <p className="text-sm">{desc ? desc : 'Default desc'}</p>
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
    </div>
  );
}