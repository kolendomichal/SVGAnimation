import React from 'react';
import "./SVGCanvas.css";
import SVGCircle from "./SVGCircle";
import SVGSquare from "./SVGSquare";
import SVGPolygon from "./SVGPolygon";

class SVGCanvas extends React.Component {
    constructor(props) {
        super(props);
    }

    getFiguresToRender() {
        return this.props.figures.map( (item, i) => {
            switch(item.figureType) {
                case "Circle": {
                    return <SVGCircle xPosition={item.xPosition} yPosition={item.yPosition} animationType={item.animationType}/>
                }
                case "Square": {
                    return <SVGSquare xPosition={item.xPosition} yPosition={item.yPosition} animationType={item.animationType}/>
                }
                case "Polygon": {
                    return <SVGPolygon xPosition={item.xPosition} yPosition={item.yPosition} animationType={item.animationType}/>
                }
                default: {
                    return <SVGCircle xPosition={item.xPosition} yPosition={item.yPosition} animationType={item.animationType}/>
                }
            }
        })
    }

    render() { 
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800" width="100%" height="100%">
                {this.getFiguresToRender()}
            </svg>
        )
    }
}

export default SVGCanvas;