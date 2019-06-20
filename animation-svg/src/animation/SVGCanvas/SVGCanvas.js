import React from 'react';
import "./SVGCanvas.css";
import SVGExport from "./SVGExport/SVGExport";
import SVGImport from "./SVGImport/SVGImport";
import SVGCircle from "./SVGFigures/SVGCircle";
import SVGSquare from "./SVGFigures/SVGSquare";
import SVGPolygon from "./SVGFigures/SVGPolygon";
import SVGDimensions from "../static/SVGDimensions";
import {changeActiveSVGFigureAction  } from "../redux/actions";
import { connect } from "react-redux";

class SVGCanvas extends React.PureComponent {

    svgText = React.createRef();

    getFiguresToRender() {
        return this.props.figuresList.map((figure, i) => {
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

    renderSVG() {
        return (
            <svg version="1.1" ref={this.svgText} className=" border-top border-bottom mt-3" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${SVGDimensions.width} ${SVGDimensions.height}`}
                width="100%"
                height="79%"
                onClick={(evt) => this.props.changeActiveSVGFigure(evt.target.id)}>
                {this.getFiguresToRender()}
            </svg>
        )
    }


    render() {
        return (
            <React.Fragment>
                <div className="row mt-5 w-100">
                    <div className="col-lg-12 text-center h-100">
                        <span className="h2">SVGAnimation</span>
                        <SVGExport title={"SVGAnimation"} svgText={this.renderSVG()} />
                        <SVGImport setNewFigures={this.props.setNewFigures} />
                    </div>
                </div>
                {this.renderSVG()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { figuresList } = state.figuresProjects;
    return {figuresList};
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveSVGFigure: (hrefid) => dispatch(changeActiveSVGFigureAction(hrefid))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SVGCanvas)