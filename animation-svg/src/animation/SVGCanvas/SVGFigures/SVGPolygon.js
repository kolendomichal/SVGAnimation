import React from 'react';
import SVGAnimate from '../SVGAnimate/SVGAnimate'

function SVGPolygon(props) {
    const figure = props.figure;
    return (
        <React.Fragment>
            <polygon id={figure.hrefid} opacity={figure.opacity} fill={figure.fill.hex} stroke={figure.stroke.hex} strokeWidth={figure.strokeWidth} points={computeCornerPoints(figure.xPosition, figure.yPosition, figure.size, figure.numOfSides)} className="figure" />
            <SVGAnimate animation={figure.animation}/>
        </React.Fragment>
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