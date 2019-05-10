import React from 'react';
import "./SVGCanvas.css";

class SVGCanvas extends React.Component {

    render() { 
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800">
                <polygon class="diamondOr tulip" points="400, 280, 310, 150, 400, 20, 490, 150"/>
            </svg>
        )
    }
}

export default SVGCanvas;