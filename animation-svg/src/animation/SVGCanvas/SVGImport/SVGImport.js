import React from 'react';
import XMLParser from 'react-xml-parser';
import FigureTypes from '../../static/FigureTypes';
import { Figure } from '../../static/Figure';

class SVGImport extends React.Component {
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
            this.props.setNewFigures(figures);
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

            if (svgProperty === 'id') {
                figure.hrefid = atr;
                figure.name = atr;
            }
            else if (svgProperty === 'cx')
                figure.xPosition = atr;
            else if (svgProperty === 'cy')
                figure.yPosition = atr;
            else if (svgProperty === 'r')
                figure.size = atr;
            else figure.property = atr;
        }
        return figure;
    }

    addAnimationToFigure(svgObject, figures) {
        for (let i in figures) {
            if (('#' + figures[i].hrefid) === svgObject.attributes.href) {
                Object.keys(svgObject.attributes).forEach(function (key, index) {
                    figures[i].animation[key] = svgObject.attributes[key];
                })
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-secondary float-right mr-2 mt-2" data-toggle="modal" data-target="#importModal"> Import SVG </button>
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

export default SVGImport;