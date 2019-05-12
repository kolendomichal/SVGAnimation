import React from 'react';

function SVGAnimate(props) {
    const animation = props.animation;

    return (
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
            fill={animation.fill} />
    )
}

export default SVGAnimate;