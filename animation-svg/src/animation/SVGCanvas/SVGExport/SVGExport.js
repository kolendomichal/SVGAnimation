import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import './SVGExport.css';

function SVGExport(props) {
    function copySVGAnimation() {
        let svg = props.svgElement.current;
        return svg !== undefined ? svg.outerHTML : ''
    }

    function handleTextSelect() {
        props.svgText.current.select();
    }

    return (
        <div className="row mt-5 w-100">
            <div className="col-lg-8 text-center">
                <span className="h2 ml-2">SVGAnimation</span>
            </div>
            <div className="col-lg-4">
                <Popup className="border border-dark" trigger={<button className="btn btn-secondary float-right mr-5"> Export SVG </button>} modal>
                    <div className="svg-code w-100">
                        <p className="h5 font-weight-bold ml-3 mt-3">Copy SVG</p>
                        <textarea readOnly ref={props.svgText} className="svg-text rounded bg-light w-100 mt-2" onClick={() => handleTextSelect()}>{copySVGAnimation()}</textarea>
                    </div>
                </Popup>
            </div>
        </div >
    )

}

export default SVGExport;