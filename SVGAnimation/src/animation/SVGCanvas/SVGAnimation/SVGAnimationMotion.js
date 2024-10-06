import React from 'react';

function SVGAnimationMotion(props) {
    const animation = props.animation;
    const r = animation.r;
    const rr = 2 * r;
    const path = "M 0,0 m -" + r + ", 0 a " + r + "," + r + " 0 1,0 " + rr + ",0 a " + r + "," + r + " 0 1,0 -" + rr + ",0";

    return (
        <React.Fragment>
            {animation.r !== 0 &&
                <animateMotion
                    dur={`${animation.dur}s`}
                    begin={animation.begin}
                    fill={animation.fill}
                    repeatCount={animation.repeatCount}
                    path={path} />
            }
        </React.Fragment>
    )
}

export default SVGAnimationMotion;