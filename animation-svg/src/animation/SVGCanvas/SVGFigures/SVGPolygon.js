import React from 'react';
import AnimationTypes from "../../static/AnimationTypes";

function SVGPolygon(props) {
    const figure = props.figure;
    let animStyleName = Object.keys(AnimationTypes).find(key => AnimationTypes[key] === figure.animationType);
    return (
        <polygon  opacity={figure.opacity} fill={figure.fill.hex} stroke={figure.stroke.hex} strokeWidth={figure.strokeWidth} points={computeCornerPoints(figure.xPosition, figure.yPosition, figure.size, 6)} className={animStyleName + " figure"} />
    )
}

function computeCornerPoints(xMiddle, yMiddle, radius, numOfSides) {
    let polygonPoints = [];
    for(let i = 0; i < numOfSides; i++) {
        polygonPoints.push(xMiddle + radius * Math.cos(2 * Math.PI * i / numOfSides),
                           yMiddle + radius * Math.sin(2 * Math.PI * i / numOfSides));
    }
    return polygonPoints;
}

export default SVGPolygon;