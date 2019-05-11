import React, { useRef } from 'react';
import "./SVGCanvas.css";
import SVGExport from "./SVGExport/SVGExport";
import SVGCircle from "./SVGFigures/SVGCircle";
import SVGSquare from "./SVGFigures/SVGSquare";
import SVGPolygon from "./SVGFigures/SVGPolygon";

function SVGCanvas(props) {
    const svgElement = useRef();
    const svgText = useRef();

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
        <React.Fragment>
            <SVGExport title={"SVGAnimation"} svgText={svgText} svgElement={svgElement} figures={props.figures}/>
            <svg version="1.1" ref={svgElement} className="border mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="80%">
                {getFiguresToRender()}
            </svg>
        </React.Fragment>
    )
}

export default SVGCanvas;