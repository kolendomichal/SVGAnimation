import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { connect } from "react-redux";

import './SVGExport.css';

class SVGExport extends React.PureComponent {

    textArea = React.createRef();

    copySVGAnimation() {
        const { svgText } = this.props;
        return svgText && ReactDOMServer.renderToStaticMarkup(svgText);
    }

    handleTextSelect() {
        this.textArea.current.select();
    }

    render() {
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
                                <textarea value={this.copySVGAnimation()} readOnly ref={this.textArea} className="svg-text rounded bg-light w-100 mt-2" onClick={() => this.handleTextSelect()} />
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
}


const mapStateToProps = (state) => {
    const { figuresList } = state.figuresProjects;
    return { figuresList };
}

export default connect(
    mapStateToProps,
    null
)(SVGExport)