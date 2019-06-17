import React, { useRef, useContext } from "react";
import { connect } from "react-redux";
import "./ActorName.css"
import SVGContext from "../../SVGContext";

import { useSelector } from 'react-redux'
import { CHANGE_FIGURE_VALUE } from "../../redux/actionTypes";

function ActorName(props) {
    const editName = useRef(null);

    function onBlurHandle() {
        props.changeFigureValue(props.valueType, editName.current.innerHTML);
    }

    return (
        <div className="text-center mt-3">
            <button ref={editName} className="h3 actor-project-name" contentEditable="true" onBlur={() => onBlurHandle()} suppressContentEditableWarning={true}>
                {props.selectedFigure[props.valueType]}
            </button>
        </div>
    );

}

const mapStateToProps = (state) => {
    const { selectedFigure } = state.reduxAnimationSwitch;
    return { selectedFigure };
}

const mapDispatchToProps = dispatch => {
    return {
        changeFigureValue: (type,value) => dispatch({ type: CHANGE_FIGURE_VALUE, payload: {type,value} })
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActorName)