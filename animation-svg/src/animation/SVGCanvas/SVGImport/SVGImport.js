import React from 'react';

class SVGImport extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fileName: "Choose svg file...",
        fileContent: null
      };
    }

    handleChooseFile(evt) {
        if(evt.target.files[0] === undefined) return;

        let file = evt.target.files[0];
        let reader = new FileReader();
        reader.onload = () => {
            let content = reader.result;
            this.setState({fileContent: content});
        }
        reader.readAsText(file, "UTF-8");
        this.setState({fileName: file.name});
    }

    handleImportFile() {
        console.log(this.state.fileName);
        console.log(this.state.fileContent);
    }
    
    render() {
        return(
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
                                    <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" onChange={(evt) => this.handleChooseFile(evt)}/>
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