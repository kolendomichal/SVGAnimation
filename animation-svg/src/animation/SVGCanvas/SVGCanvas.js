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
        <React.Fragment>
            <div className="row mt-5">
                <div className="col-lg-8 text-center">
                    <span className="h2 ml-2">SVGAnimation</span>
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-primary float-right mr-5"> Export SVG </button>
                </div>
            </div>
            <svg version="1.1" className="border mt-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="80%">
                {getFiguresToRender()}
            </svg>
        </React.Fragment>
    )
}

export default SVGCanvas;