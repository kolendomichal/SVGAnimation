import React, { useRef ,useContext} from "react";
import "./ActorName.css"
import SVGContext from "../../SVGContext";

function ActorName(props) {
    const svgContext = useContext(SVGContext);
    const editName = useRef(null);

    function onBlurHandle() {
        svgContext.changeFigureValue(props.valueType, editName.current.innerHTML);
    }

    return (
        <div className="text-center mt-3">
            <button ref={editName} className="h3 actor-name" contentEditable="true" onBlur={() => onBlurHandle()} suppressContentEditableWarning={true}>
                {svgContext.selectedFigure[props.valueType]}
            </button>
        </div>
    );

}

export default ActorName;