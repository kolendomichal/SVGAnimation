import React from 'react';
import "./SVGCanvas.css";
import SVGCircle from "./SVGCircle";
import SVGSquare from "./SVGSquare";
import SVGPolygon from "./SVGPolygon";

function SVGCanvas(props) {

    function getFiguresToRender() {
        return props.figures.map((figure, i) => {
            switch (figure.figureType) {
                case "Circle": {
                    return <SVGCircle key={i} figure={figure} />
                }
                case "Square": {
                    return <SVGSquare key={i} figure={figure} />
                }
                case "Polygon": {
                    return <SVGPolygon key={i} figure={figure} />
                }
                default: {
                    return <SVGCircle key={i} figure={figure} />
                }
            }
        })
    }

    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 800" width="100%" height="100%">
            {getFiguresToRender()}
        </svg>
    )
}

export default SVGCanvas;