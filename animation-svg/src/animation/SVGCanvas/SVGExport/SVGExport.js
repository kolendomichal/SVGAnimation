import React, { useRef } from 'react';
import Popup from 'reactjs-popup';
import SVGStyles from './SVGStyles';
import './SVGExport.css';

function SVGExport(props) {

    function addStylesToSVG(svg) {
        svg = svg.substring(0, svg.length-6);
        svg += "<style> " + SVGStyles + "</style></svg>";
        return svg;
    }
    
    function copySVGAnimation() {
        if(props.svgElement.current === undefined) return '';
        let svg = props.svgElement.current.outerHTML;
        return addStylesToSVG(svg);
    }

    function handleTextSelect() {
        props.svgText.current.select();
    }

    return (
        <div className="row mt-5 w-100">
            <div className="col-lg-12 text-center">
                <span className="h2">SVGAnimation</span>
                <Popup className="border border-dark" trigger={<button className="btn btn-secondary float-right mr-2"> Export SVG </button>} modal>
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