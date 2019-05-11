import React from 'react';
import "./SVGCanvas.css";
import AnimationTypes from "../static/AnimationTypes";

function SVGCircle(props) {
    const figure = props.figure;
    let animStyleName = Object.keys(AnimationTypes).find(key => AnimationTypes[key] === figure.animationType);
    return (
        <circle fill={figure.fill.hex} stroke={figure.stroke.hex} strokeWidth={figure.strokeWidth} className={animStyleName + " figure"} cx={figure.xPosition} cy={figure.yPosition} r="50" />
    )
}

export default SVGCircle;