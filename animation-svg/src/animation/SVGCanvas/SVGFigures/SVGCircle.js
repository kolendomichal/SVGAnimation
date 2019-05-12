import React from 'react';
import SVGAnimate from '../SVGAnimate/SVGAnimate'

function SVGCircle(props) {
    const figure = props.figure;
    return (
        <React.Fragment>
            <circle id={figure.hrefid} opacity={figure.opacity} fill={figure.fill.hex} stroke={figure.stroke.hex} strokeWidth={figure.strokeWidth} cx={figure.xPosition} cy={figure.yPosition} r={figure.size} />
            <SVGAnimate animation={figure.animation}/>
        </React.Fragment>
    )
}

export default SVGCircle;