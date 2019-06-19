import React from 'react';
import XMLParser from 'react-xml-parser';
import FigureTypes from '../../static/FigureTypes';
import { Figure } from '../../static/Figure';
import { importFiguresFromFileAction } from '../../redux/actions';
import { connect } from "react-redux";
class SVGImport extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fileName: "Choose svg file...",
            fileContent: "",
            svgNotSupported: false,
            alertInformation: ""
        };
    }

    handleChooseFile(evt) {
        if (evt.target.files[0] === undefined) return;

        let file = evt.target.files[evt.target.files.length - 1];
        let reader = new FileReader();
        reader.onload = () => {
            let content = reader.result;
            this.setState({ fileContent: content });
        }
        reader.readAsText(file, "UTF-8");
        this.setState({ fileName: file.name });
    }

    handleImportFile() {
        let svgJSON = new XMLParser().parseFromString(this.state.fileContent);
        let figures = [];

        for (let i in svgJSON.children) {
            let svgObject = svgJSON.children[i];
            if (this.isFigure(svgObject)) {
                figures.push(this.createFigureFromSVG(svgObject));
            } else if (svgObject.name.toUpperCase() === "ANIMATE") {
                this.addAnimationToFigure(svgObject, figures);
            } else {
                let information = "Not supported svg element: " + svgObject.name + ". ";
                this.setState({ fileName: "Choose svg file...", svgNotSupported: true, alertInformation: information });
                return;
            }
            this.props.importFiguresFromFile(figures);
        }
        this.setState({ svgNotSupported: false, fileName: "Choose svg file...", alertInformation: "SVG uploaded successfully." });
    }

    isFigure(svgObject) {
        for (let i in FigureTypes) {
            if (FigureTypes[i].toUpperCase() === svgObject.name.toUpperCase()) return true;
        }
        return false;
    }

    createFigureFromSVG(svgObject) {
        let figure = new Figure();
        for (let svgProperty in svgObject.attributes) {
            let atr = svgObject.attributes[svgProperty];

            if (svgProperty === 'fill')
                figure.fill.hex = atr;
            else if (svgProperty === 'xposition')
                figure.xPosition = parseInt(atr);
            else if (svgProperty === 'yposition')
                figure.yPosition = parseInt(atr);
            else if (svgProperty === 'numofsides')
                figure.numOfSides = parseInt(atr);
            else if (svgProperty === 'figuretype')
                figure.figureType = atr;
            else if (svgProperty === 'opacity')
                figure.opacity = parseFloat(atr);
            else if (svgProperty === 'stroke-width')
                figure.strokeWidth = parseFloat(atr);
            else if (svgProperty === 'size')
                figure.size = parseInt(atr);
            else if (svgProperty === 'stroke')
                figure.stroke.hex = atr;
            else figure[svgProperty] = atr;
        }
        return figure;
    }

    addAnimationToFigure(svgObject, figures) {
        for (let i in figures) {
            if (('#' + figures[i].hrefid) === svgObject.attributes.href) {
                Object.keys(svgObject.attributes).forEach(function (key, index) {
                        if (key === '_attributename')
                            figures[i].animation.attributeName = svgObject.attributes[key];
                        else if (key === '_to')
                            figures[i].animation.to = svgObject.attributes[key]
                        else if (key === 'from')
                            figures[i].animation.from = svgObject.attributes[key]
                        else figures[i].animation[key] = svgObject.attributes[key];
                })
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-secondary float-right mr-2 mt-2  " data-toggle="modal" data-target="#importModal"> Import SVG </button>
                <div className="modal fade" id="importModal" tabIndex="-1" role="dialog" aria-labelledby="importModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="importModalLabel">SVGAnimation - Import SVG</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                    </div>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"
                                            onChange={(evt) => this.handleChooseFile(evt)} onClick={(event) => { event.target.value = null }} />
                                        <label className="custom-file-label">{this.state.fileName}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.handleImportFile()}>Import</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        importFiguresFromFile: (importedFiguresList) => dispatch(importFiguresFromFileAction(importedFiguresList))
    }
}
export default connect(
    null,
    mapDispatchToProps
)(SVGImport)