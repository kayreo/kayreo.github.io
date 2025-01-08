'use client';


export default function ProjButton({ projID, title }) {
  const tgts = ["Project1", "Project2", "Project3"];


  function handleJump(tgtID) {
    console.log("TGT: ", tgtID);
    const tgtProj = tgts[tgtID];
    const element = document.getElementById(tgtProj);

    const rect = element.getBoundingClientRect();
    
    const scrollPosition = rect.top + window.scrollY - 90;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
    });
}
  return <button className="nav-btn bg-blue-500 rounded-lg m-4 screen text-white p-4 text-center" onClick={() => handleJump(projID)}>{title ? title : 'Default button'}</button>;
}