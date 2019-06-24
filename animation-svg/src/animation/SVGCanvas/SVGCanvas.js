import React from 'react';
import SVGExport from "./SVGExport/SVGExport";
import SVGImport from "./SVGImport/SVGImport";
import SVGCircle from "./SVGFigures/SVGCircle";
import SVGSquare from "./SVGFigures/SVGSquare";
import SVGPolygon from "./SVGFigures/SVGPolygon";
import SVGDimensions from "../static/SVGDimensions";
import { changeActiveSVGFigureAction } from "../redux/actions";
import { connect } from "react-redux";
import UndoRedo from './UndoRedo/UndoRedo';

class SVGCanvas extends React.PureComponent {

    svgText = React.createRef();

    setFigure(evt){
        if (evt.target.getAttribute("figuretype") !== null) {
            this.props.changeActiveSVGFigure(evt.target.getAttribute("id"))
        }
    }

    getFiguresToRender() {
        const { figuresList } = this.props;
        return figuresList && figuresList.map((figure, i) => {
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
            <svg version="1.1" ref={this.svgText} className="border-top border-bottom" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${SVGDimensions.width} ${SVGDimensions.height}`}
                width="100%"
                height="79vh"
                onClick={(evt) => this.setFigure(evt)}>
                {this.getFiguresToRender()}
            </svg>
        )
    }


    render() {
        return (
            <React.Fragment>
                <div className="row w-100  d-flex align-content-center" style={{ height: '10vh' }}>
                    <div className="col-lg-12 mt-5 text-center h-100">
                        <span className="h2">SVGAnimation</span>
                        <SVGExport title={"SVGAnimation"} svgText={this.renderSVG()} />
                        <SVGImport setNewFigures={this.props.setNewFigures} />
                    </div>
                </div>
                {this.renderSVG()}
                <UndoRedo />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { figuresList } = state.figuresProjects.present;
    return { figuresList };
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