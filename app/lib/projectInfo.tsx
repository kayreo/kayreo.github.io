import { faUser, faUserGroup, faGamepad, faLaptop, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function projectInfo({whichProject}) {
    if (whichProject == "Maid Rush Madness") {
        return (
        <div className="flex justify-center">
            <div className="items-center max-w-md grid grid-cols-3 gap-4 border-4 border-gray-300 p-4">
            <div className="border-4 border-gray-300 col-start-1 col-end-1 p-4">
                Overview
            </div>
            <div className="border-4 border-gray-300 col-start-2 col-end-6 p-4">
                <div className="items-center grid grid-cols-3">
                <div className="relative group">
                <div className="tooltip">Solo project</div>
                <div className="col-start-1"><FontAwesomeIcon icon={faUser} className="projectType"></FontAwesomeIcon></div></div>

                <div className="relative group">
                <div className="tooltip">Video game</div>
                <div className="col-start-2"><FontAwesomeIcon icon={faGamepad} className="projectType"></FontAwesomeIcon></div></div>

                <div className="relative group">
                <div className="tooltip">Personal project</div>
                <div className="col-start-3"><FontAwesomeIcon icon={faLaptop} className="projectType"></FontAwesomeIcon></div></div>
                </div>
            </div>
            <div className="border-4 border-gray-300 col-start-1 col-end-1 p-4">
                Built with
            </div>
            <div className="border-4 border-gray-300 col-start-2 col-end-6 p-4">
                Godot 4.0
            
            </div>
            </div>
        </div>
        );
    }
}