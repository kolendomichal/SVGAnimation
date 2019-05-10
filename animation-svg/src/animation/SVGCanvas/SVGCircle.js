import React from 'react';
import "./SVGCanvas.css";

function SVGCircle(props) {

    return (
        <circle className="anim figure" cx={props.xPosition} cy={props.yPosition} r="50" />
    )
}

export default SVGCircle;