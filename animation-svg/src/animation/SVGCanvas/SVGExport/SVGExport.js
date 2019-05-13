import React from 'react';
import ReactDOMServer from 'react-dom/server';
import './SVGExport.css';

function SVGExport(props) {

    function copySVGAnimation() {
        if (props.svgElement === undefined) return '';
        let svg = ReactDOMServer.renderToStaticMarkup(props.svgElement);
        return svg;
    }

    function handleTextSelect() {
        props.svgText.current.select();
    }

    return (
        <React.Fragment>
            <button type="button" className="btn btn-secondary float-right mr-2 mt-2" data-toggle="modal" data-target="#exportModal"> Export SVG </button>
            <div className="modal fade" id="exportModal" tabIndex="-1" role="dialog" aria-labelledby="exportModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exportModalLabel">SVGAnimation - Export SVG</h5>
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