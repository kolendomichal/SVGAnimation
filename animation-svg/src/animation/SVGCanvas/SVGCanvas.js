import React from 'react';
import "./SVGCanvas.css";
import SVGCircle from "./SVGCircle";
import SVGSquare from "./SVGSquare";

class SVGCanvas extends React.Component {
    constructor(props) {
        super(props);
    }

    getFiguresToRender() {
        return this.props.figures.map( (item, i) => {
            switch(item.figureType) {
                case "Circle": {
                    return <SVGCircle xPosition={item.xPosition} yPosition={item.yPosition}/>
                }
                case "Square": {
                    return <SVGSquare xPosition={item.xPosition} yPosition={item.yPosition}/>
                }
                default: {
                    return <SVGCircle xPosition={item.xPosition} yPosition={item.yPosition}/>
                }
            }
        })
    }

    render() { 
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800">
                {this.getFiguresToRender()}
            </svg>
        )
    }
}

export default SVGCanvas;