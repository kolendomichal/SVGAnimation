import React from 'react';
import SVGAnimate from '../SVGAnimate/SVGAnimate'

function SVGSquare(props) {
    const figure = props.figure;

    return (
        <React.Fragment>
            <polygon id={figure.hrefid} opacity={figure.opacity}  fill={figure.fill.hex} stroke={figure.stroke.hex} strokeWidth={figure.strokeWidth} points={computeCornerPoints(figure.xPosition, figure.yPosition, figure.size)} className="figure" />
            <SVGAnimate animation={figure.animation} 
                        attributeName="points"
                        from={computeCornerPoints(figure.xPosition, figure.yPosition, figure.size, figure.numOfSides)}
                        to={computeToPoints(figure)}
            />
        </React.Fragment>
    )
}

function computeToPoints(figure) {
    if(figure.animation.attributeName === 'cx')
        return computeCornerPoints(figure.xPosition + parseInt(figure.animation.to), figure.yPosition, figure.size, figure.numOfSides);
    if(figure.animation.attributeName === 'cy')
        return computeCornerPoints(figure.xPosition, figure.yPosition + parseInt(figure.animation.to), figure.size, figure.numOfSides);
}

function computeCornerPoints(xMiddle, yMiddle, sideLength) {
    let squarePoints = [];
    squarePoints.push(parseInt(xMiddle - sideLength/2), parseInt(yMiddle - sideLength/2));
    squarePoints.push(parseInt(xMiddle - sideLength/2), parseInt(yMiddle + sideLength/2));
    squarePoints.push(parseInt(xMiddle + sideLength/2), parseInt(yMiddle + sideLength/2));
    squarePoints.push(parseInt(xMiddle + sideLength/2), parseInt(yMiddle - sideLength/2));
    return squarePoints;
}

export default SVGSquare;