import React from 'react';
import { connect } from "react-redux";
import { handleImportedProjectFileAction } from '../../redux/actions';

class FileImport extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            fileContent: null,
            fileName: this.props.importFilePlaceholder,
            ifCorrectFile: false
        }

    }
    fileReader = new FileReader();

    // useEffect(() => {
    //     if (fileContent && !props.fileValidate(fileContent)) {
    //         setFileName(`Please check if your ${fileType} is correct.`)
    //         setFileValidation(false)
    //     } else {
    //         setFileValidation(true);
    //     }
    //     // eslint-disable-next-line
    // }, [fileContent]);

    handleChooseFile = (evt) => {
        if (evt.target.files[0]) {
            let file = evt.target.files[evt.target.files.length - 1];

            if (!file.name.endsWith(this.props.fileType)) {
                this.setState({ fileName: `Only ${this.props.fileType} files are allowed!` });
                return;
            }

            this.fileReader.readAsText(file, "UTF-8");
            this.fileReader.onload = () => {
                this.setState({ fileContent: this.fileReader.result });
            }
            this.setState({ fileName: file.name });
        }
    }

    render() {
        const { importIdentificator, buttonTitle, importModalHeader } = this.props;
        return (
            <React.Fragment>
                <button type="button" className="btn btn-secondary project-button pr-1 pl-1" data-toggle="modal" data-target={`#${importIdentificator}`}><p> {buttonTitle} </p>  </button>
                <div className="modal fade" id={importIdentificator} tabIndex="-1" role="dialog" aria-labelledby="importModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="importModalLabel">{importModalHeader}</h5>
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
                                {this.state.ifCorrectFile
                                    ? <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.props.handleImportedProjectFile(this.state.fileContent)}>Import</button>
                                    : <button type="button" disabled className="btn btn-primary" data-dismiss="modal">Import</button>
                                }
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
        handleImportedProjectFile: (fileContent) => dispatch(handleImportedProjectFileAction(fileContent))
    }
}


export default connect(
    null,
    mapDispatchToProps
) (FileImport);