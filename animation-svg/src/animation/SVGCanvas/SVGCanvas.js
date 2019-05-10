import React from 'react';
import "./SVGCanvas.css";
import SVGCircle from "./SVGCricle";

class SVGCanvas extends React.Component {
    constructor(props) {
        super(props);
    }

    getFiguresToRender() {
        let figuresAfterChange = []
        for(let i = 0; i < this.props.figures.length; i++) {
            figuresAfterChange.push(<SVGCircle xPosition={this.props.figures[i].xPosition} yPosition={this.props.figures[i].yPosition}/>)
        }
        return figuresAfterChange;
    }

    render() { 
        let renderedFigures = this.getFiguresToRender();
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800">
                {renderedFigures}
            </svg>
        )
    }
}

export default SVGCanvas;