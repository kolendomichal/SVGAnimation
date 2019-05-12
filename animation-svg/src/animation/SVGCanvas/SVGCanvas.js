import React, { useRef } from 'react';
import "./SVGCanvas.css";
import SVGExport from "./SVGExport/SVGExport";
import SVGCircle from "./SVGFigures/SVGCircle";
import SVGSquare from "./SVGFigures/SVGSquare";
import SVGPolygon from "./SVGFigures/SVGPolygon";

function SVGCanvas(props) {
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

    function renderSVG() {
        return (
        <svg version="1.1" className="border mt-3" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 " + props.svgDimensions[0] + " " + props.svgDimensions[1]} 
            width="100%" 
            height="80%" 
            onClick={(evt) => changeActiveFigure(evt)}>
            {getFiguresToRender()}
        </svg>
        )
    }

    function changeActiveFigure(evt) {
        if(evt.target.id.startsWith('figure')) {
            let hrefid = evt.target.id;
            props.figures.forEach(figure => {
                if(figure.hrefid === hrefid) {
                    props.changeSelectedFigure(figure);
                }
            });
        }
    }

    return (
        <React.Fragment>
            <SVGExport title={"SVGAnimation"} svgText={svgText} svgElement={renderSVG()} figures={props.figures}/>
            {renderSVG()}
        </React.Fragment>
    )
}

export default SVGCanvas;