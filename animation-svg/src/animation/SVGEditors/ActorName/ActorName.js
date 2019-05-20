import React, { useRef } from "react";
import "./ActorName.css"

function ActorName(props) {
    const editName = useRef(null);

    function onBlurHandle() {
        props.options.changeSpecifiedValue(props.valueType, editName.current.innerHTML);
    }

    return (
        <div className="text-center mt-3">
            <button ref={editName} className="h3 actor-name" contentEditable="true" onBlur={() => onBlurHandle()} suppressContentEditableWarning={true}>
                {props.options.selectedFigure[props.valueType]}
            </button>
        </div>
    );

}

export default ActorName;