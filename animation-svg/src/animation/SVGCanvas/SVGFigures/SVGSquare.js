import React from 'react';
import SVGAnimate from '../SVGAnimation/SVGAnimate'
import SVGAnimationMotion from '../SVGAnimation/SVGAnimationMotion';

function SVGSquare(props) {
    const figure = props.figure;

    return (
        <React.Fragment>
            <polygon style={{ cursor: 'pointer' }}
                id={figure.hrefid}
                opacity={figure.opacity}
                fill={figure.fill.hex}
                stroke={figure.stroke.hex}
                strokeWidth={figure.strokeWidth}
                hrefid={figure.hrefid}
                name={figure.name}
                figuretype={figure.figureType}
                xposition={figure.xPosition}
                yposition={figure.yPosition}
                numofsides={figure.numOfSides}
                size={figure.size}
            >
                <SVGAnimationMotion animation={figure.animation} />
            </polygon>
            <SVGAnimate animation={figure.animation}
                attributeName="points"
                from={computeCornerPoints(figure.xPosition, figure.yPosition, figure.size)}
                to={computeToPoints(figure)}
            />
        </React.Fragment>
    )
}

function computeToPoints(figure) {
    if (figure.animation.attributeName === 'cx')
        return computeCornerPoints(figure.xPosition + parseInt(figure.animation.to), figure.yPosition, figure.size, figure.numOfSides);
    if (figure.animation.attributeName === 'cy')
        return computeCornerPoints(figure.xPosition, figure.yPosition + parseInt(figure.animation.to), figure.size, figure.numOfSides);
}

function computeCornerPoints(xMiddle, yMiddle, sideLength) {
    let squarePoints = [];
    squarePoints.push(parseInt(xMiddle - sideLength / 2), parseInt(yMiddle - sideLength / 2));
    squarePoints.push(parseInt(xMiddle - sideLength / 2), parseInt(yMiddle + sideLength / 2));
    squarePoints.push(parseInt(xMiddle + sideLength / 2), parseInt(yMiddle + sideLength / 2));
    squarePoints.push(parseInt(xMiddle + sideLength / 2), parseInt(yMiddle - sideLength / 2));
    return squarePoints;
}

export default SVGSquare;