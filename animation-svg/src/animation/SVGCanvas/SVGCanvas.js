import React, { useRef } from 'react';
import "./SVGCanvas.css";
import SVGExport from "./SVGExport/SVGExport";
import SVGImport from "./SVGImport/SVGImport";
import SVGCircle from "./SVGFigures/SVGCircle";
import SVGSquare from "./SVGFigures/SVGSquare";
import SVGPolygon from "./SVGFigures/SVGPolygon";
import SVGDimensions from "../static/SVGDimensions";

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
            <svg version="1.1" className=" border-top border-bottom mt-3" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${SVGDimensions.width} ${SVGDimensions.height}`}
                width="100%"
                height="79%"
                onClick={(evt) => changeActiveFigure(evt)}>
                {getFiguresToRender()}
            </svg>
        )
    }

    function changeActiveFigure(evt) {
        if (evt.target.id.startsWith('figure')) {
            let hrefid = evt.target.id;
            props.figures.forEach(figure => {
                if (figure.hrefid === hrefid) {
                    props.showFigureEditor(figure.id);
                }
            });
        }
    }

    return (
        <React.Fragment>
            <div className="row mt-5 w-100">
                <div className="col-lg-12 text-center h-100">
                    <span className="h2">SVGAnimation</span>
                    <SVGExport title={"SVGAnimation"} svgText={svgText} svgElement={renderSVG()} figures={props.figures} />
                    <SVGImport setNewFigures={props.setNewFigures} />
                </div>
            </div>
            {renderSVG()}
        </React.Fragment>
    )
}

export default SVGCanvas;