import React from 'react';
import AnimationTypes from "../../static/AnimationTypes";

function SVGCircle(props) {
    const figure = props.figure;
    let animStyleName = Object.keys(AnimationTypes).find(key => AnimationTypes[key] === figure.animationType);
    return (
        <React.Fragment>
            <circle id="bluetest" opacity={figure.opacity} fill={figure.fill.hex} stroke={figure.stroke.hex} strokeWidth={figure.strokeWidth} cx={figure.xPosition} cy={figure.yPosition} r={figure.size} />
            <animate
                href="#bluetest"
                attributeName="cx"
                from="0"
                to="100"
                additive="sum"
                repeatCount="3"
                calcMode="spline"
                keyTimes="0;1"
                keySplines=".42 0 1 1"
                dur="1s"
                begin="0s"
                fill="freeze" />
        </React.Fragment>
    )
}

export default SVGCircle;