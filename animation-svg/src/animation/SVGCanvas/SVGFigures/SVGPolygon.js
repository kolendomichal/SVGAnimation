import React from 'react';
import SVGAnimate from '../SVGAnimation/SVGAnimate'
import SVGAnimationMotion from '../SVGAnimation/SVGAnimationMotion';

function SVGPolygon(props) {
    const figure = props.figure;
    const animationEnabled = figure.animationEnabled;
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
                {animationEnabled && <SVGAnimationMotion animation={figure.animation} />}
            </polygon>
            {animationEnabled &&
                <SVGAnimate animation={figure.animation}
                    attributeName="points"
                    from={computeCornerPoints(figure.xPosition, figure.yPosition, figure.size, figure.numOfSides)}
                    to={computeToPoints(figure)}
                />}
        </React.Fragment>
    )
}

function computeToPoints(figure) {
    if (figure.animation.attributeName === 'cx')
        return computeCornerPoints(figure.xPosition + parseInt(figure.animation.to), figure.yPosition, figure.size, figure.numOfSides);
    if (figure.animation.attributeName === 'cy')
        return computeCornerPoints(figure.xPosition, figure.yPosition + parseInt(figure.animation.to), figure.size, figure.numOfSides);
}

function computeCornerPoints(xMiddle, yMiddle, radius, numOfSides) {
    let polygonPoints = [];
    for (let i = 0; i < numOfSides; i++) {
        polygonPoints.push(parseInt(xMiddle + radius * Math.cos(2 * Math.PI * i / numOfSides)),
            parseInt(yMiddle + radius * Math.sin(2 * Math.PI * i / numOfSides)));
    }
    return polygonPoints;
}

export default SVGPolygon;