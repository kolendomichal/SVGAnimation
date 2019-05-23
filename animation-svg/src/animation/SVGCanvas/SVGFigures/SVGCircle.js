import React from 'react';
import SVGAnimate from '../SVGAnimation/SVGAnimate'
import SVGAnimationMotion from '../SVGAnimation/SVGAnimationMotion';

function SVGCircle(props) {
    const figure = props.figure;
    return (
        <React.Fragment>
            <circle style={{ cursor: 'pointer' }}
                id={figure.hrefid}
                opacity={figure.opacity}
                fill={figure.fill.hex}
                stroke={figure.stroke.hex}
                strokeWidth={figure.strokeWidth}
                cx={figure.xPosition}
                cy={figure.yPosition}
                r={figure.size}
                href={figure.href}
                figuretype={figure.figureType}
                name={figure.name}
                xposition={figure.xPosition}
                yposition={figure.yPosition}
                size={figure.size}
            >
                <SVGAnimationMotion animation={figure.animation} />
            </circle>
            <SVGAnimate animation={figure.animation} />
        </React.Fragment>
    )
}
export default SVGCircle;