import React, { useRef ,useContext} from "react";
import "./ActorName.css"
import SVGContext from "../../SVGContext";

function ProjectName() {
    const svgContext = useContext(SVGContext);
    const editName = useRef(null);

    function onBlurHandle() {
        svgContext.changeFigureValue("projectName", editName.current.innerHTML);
    }

    return (
        <div className="text-center mt-3">
            <button ref={editName} className="h1 actor-project-name" contentEditable="true" onBlur={() => onBlurHandle()} suppressContentEditableWarning={true}>
                {svgContext.selectedProject["name"]}
            </button>
        </div>
    );

}

export default ProjectName;