import React from 'react';
import "./SVGCanvas.css";
import AnimationTypes from "../static/AnimationTypes";

function SVGSquare(props) {
    const figure = props.figure;
    let animStyleName = Object.keys(AnimationTypes).find(key => AnimationTypes[key] === figure.animationType);
    return (
        <polygon fill={figure.fill.hex} stroke={figure.stroke.hex} strokeWidth={figure.strokeWidth} points={computeCornerPoints(figure.xPosition, figure.yPosition, 50)} className={animStyleName + " figure"} />
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