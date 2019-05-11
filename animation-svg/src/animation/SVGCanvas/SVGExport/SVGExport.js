import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SVGStyles from './SVGStyles';
import './SVGExport.css';

function SVGExport(props) {

    function addStylesToSVG(svg) {
        svg = svg.substring(0, svg.length - 6);
        svg += "<style> " + SVGStyles + "</style></svg>";
        return svg;
    }

    function copySVGAnimation() {
        if (props.svgElement === undefined) return '';
        let svg = ReactDOMServer.renderToStaticMarkup(props.svgElement);
        return addStylesToSVG(svg);
    }

    function handleTextSelect() {
        props.svgText.current.select();
    }

    return (
        <React.Fragment>
            <div className="row mt-5 w-100">
                <div className="col-lg-12 text-center">
                    <span className="h2">SVGAnimation</span>
                    <button type="button" className="btn btn-secondary float-right mr-2" data-toggle="modal" data-target="#exampleModal"> Export SVG </button>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">SVGAnimation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <textarea value={copySVGAnimation()} readOnly ref={props.svgText} className="svg-text rounded bg-light w-100 mt-2" onClick={() => handleTextSelect()} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )

}

export default SVGExport;