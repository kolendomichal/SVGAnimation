import React from 'react';
import "./SVGCanvas.css";
import AnimationTypes from "../static/AnimationTypes";

function SVGCircle(props) {
    let animStyleName = Object.keys(AnimationTypes).find(key => AnimationTypes[key] === props.animationType);
    return (
        <circle className={animStyleName + " figure"} cx={props.xPosition} cy={props.yPosition} r="50" />
    )
}

export default SVGCircle;