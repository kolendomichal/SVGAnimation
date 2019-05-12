import React from 'react';

function SVGAnimate(props) {
    let animation = props.animation;
    return (
        <React.Fragment>
            <animate
                href={animation.href}
                attributeName={animation.attributeName}
                from={animation.from}
                to={animation.to}
                additive={animation.additive}
                repeatCount={animation.repeatCount}
                calcMode={animation.calcMode}
                keyTimes={animation.keyTimes}
                keySplines={animation.keySplines}
                dur={animation.dur}
                begin={animation.begin}
                fill={animation.freeze} />
        </React.Fragment>
    )
}

export default SVGAnimate;