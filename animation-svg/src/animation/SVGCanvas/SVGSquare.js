import React from 'react';
import "./SVGCanvas.css";
import AnimationTypes from "../static/AnimationTypes";

function SVGSquare(props) {
    let animStyleName = Object.keys(AnimationTypes).find(key => AnimationTypes[key] === props.animationType);
    return (
        <polygon points={computeCornerPoints(props.xPosition, props.yPosition, 50)} className={animStyleName + " figure"} />
    )
}

function computeCornerPoints(xMiddle, yMiddle, sideLength) {
    let squarePoints = [];
    squarePoints.push(xMiddle - sideLength/2, yMiddle - sideLength/2);
    squarePoints.push(xMiddle - sideLength/2, yMiddle + sideLength/2);
    squarePoints.push(xMiddle + sideLength/2, yMiddle + sideLength/2);
    squarePoints.push(xMiddle + sideLength/2, yMiddle - sideLength/2);
    return squarePoints;
}

export default SVGSquare;