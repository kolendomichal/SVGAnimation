import React from 'react';
import "./SVGCanvas.css";

class SVGCircle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <circle className="anim figure" cx={this.props.xPosition} cy={this.props.yPosition} r="50"/>
        )
    }
}

export default SVGCircle;