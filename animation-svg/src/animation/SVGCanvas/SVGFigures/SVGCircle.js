import React from 'react';
import AnimationTypes from "../../static/AnimationTypes";

function SVGCircle(props) {
    const figure = props.figure;
    let animStyleName = Object.keys(AnimationTypes).find(key => AnimationTypes[key] === figure.animationType);
    return (
        <circle opacity={figure.opacity} fill={figure.fill.hex} stroke={figure.stroke.hex} strokeWidth={figure.strokeWidth} className={animStyleName + " figure"} cx={figure.xPosition} cy={figure.yPosition} r={figure.size} />
    )
}

export default SVGCircle;