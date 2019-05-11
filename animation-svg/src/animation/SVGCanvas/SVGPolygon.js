import React from 'react';
import "./SVGCanvas.css";

function SVGPolygon(props) {
    console.log('Zwracam polygon');
    return (
        <polygon points={computeCornerPoints(props.xPosition, props.yPosition, 50, 6)} className="anim figure" />
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