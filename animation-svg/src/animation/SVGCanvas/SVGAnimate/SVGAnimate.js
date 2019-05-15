import React from 'react';

function SVGAnimate(props) {
    const animation = props.animation;
    return (
        <animate
            href={animation.href}
            attributeName={props.attributeName === undefined ? animation.attributeName : props.attributeName}
            from={props.from === undefined ? animation.from : props.from}
            to={props.to === undefined ? animation.to : props.to}
            additive={animation.additive}
            repeatCount={animation.repeatCount}
            calcMode={animation.calcMode}
            keyTimes={animation.keyTimes}
            keySplines={animation.keySplines}
            dur={animation.dur}
            begin={animation.begin}
            fill={animation.fill} 
            _to = {animation.to}
            _from = {animation.from}
            _attributename = {animation.attributeName}/>
    )
}

export default SVGAnimate;