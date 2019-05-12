import React from 'react';
import SVGAnimate from '../SVGAnimate/SVGAnimate'

function SVGSquare(props) {
    const figure = props.figure;
    return (
        <React.Fragment>
            <polygon id={figure.hrefid} opacity={figure.opacity}  fill={figure.fill.hex} stroke={figure.stroke.hex} strokeWidth={figure.strokeWidth} points={computeCornerPoints(figure.xPosition, figure.yPosition, figure.size)} className="figure" />
            <SVGAnimate animation={figure.animation}/>
        </React.Fragment>
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