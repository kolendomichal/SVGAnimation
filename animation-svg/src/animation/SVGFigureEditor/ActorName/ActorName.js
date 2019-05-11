import React, { useRef } from "react";
import "./ActorName.css"

function ActorName(props) {
    const editName = useRef(null);

    function onBlurHandle() {
        props.changeSpecifiedValue("name", editName.current.innerHTML);
    }

    return (
        <div className="text-center">
            <button ref={editName} className="actor-name" contentEditable="true" onBlur={() => onBlurHandle()} suppressContentEditableWarning={true}>
                {props.value}
            </button>
        </div>
    );

}

export default ActorName;