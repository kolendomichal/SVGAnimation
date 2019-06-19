import React, { useRef, useCallback  } from "react";
import "./ActorName.css"
import { useSelector,useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/actions";

const ActorName =  (props) => {

    const selectedFigure = useSelector(state => state.svgAnimation.selectedFigure);
    const dispatch = useDispatch();
    const changeFigureValue = useCallback((type,value) => dispatch(changeFigureValueAction(type,value)),[dispatch]);
    const editName = useRef(null);
    const onBlurHandle = () => changeFigureValue(props.valueType, editName.current.innerHTML);

    return (
        <div className="text-center mt-3">
            <button ref={editName} className="h3 actor-project-name" contentEditable="true" onBlur={() => onBlurHandle()} suppressContentEditableWarning={true}>
                {selectedFigure[props.valueType]}
            </button>
        </div>
    );

}

export default ActorName;