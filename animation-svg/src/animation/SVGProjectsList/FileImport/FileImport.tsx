import React from 'react';
import { connect } from "react-redux";
import { handleImportedProjectFileAction, HandleImportedProjectFileAction } from '../../redux/reducers/figuresProjects/actions';
import { Dispatch } from 'redux';

type State = {
    fileContent: string,
    fileName: string,
    ifCorrectFile: boolean
}

type OwnProps = {
    buttonTitle: string,
    fileType: string,
    importIdentificator: string,
    importModalHeader: string,
    importFilePlaceholder: string
}

type DispatchProps = {
    handleImportedProjectFile: (fileContent: string) => void
}

type Props = DispatchProps & OwnProps
class FileImport extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            fileContent: "",
            fileName: this.props.importFilePlaceholder,
            ifCorrectFile: true
        }

    }

    fileReader: FileReader = new FileReader();

    handleChooseFile = (event: any) => {
        if (event.target.files[0]) {
            let file = event.target.files[event.target.files.length - 1];

            if (!file.name.endsWith(this.props.fileType)) {
                this.setState({ fileName: `Only ${this.props.fileType} files are allowed!`, ifCorrectFile: false });
                return;
            } else {
                this.setState({ ifCorrectFile: true });
            }

            this.fileReader.readAsText(file, "UTF-8");
            this.fileReader.onload = () => {
                this.setState({ fileContent: this.fileReader.result as string });
            }
            this.setState({ fileName: file.name });
        }
    }

    render() {
        const { importIdentificator, buttonTitle, importModalHeader } = this.props;
        return (
            <React.Fragment>
                <div className="modal fade" id={importIdentificator} tabIndex={-1} role="dialog" aria-labelledby="importModalLabel" aria-hidden="true">
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
                                            onChange={(evt) => this.handleChooseFile(evt)} onClick={(event: any) => { event.target.value = null }} />
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
                <button type="button" className="btn btn-secondary project-button  h-100" data-toggle="modal" data-target={`#${importIdentificator}`}><p> Import < br/> {buttonTitle} </p>  </button>

            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch: Dispatch<HandleImportedProjectFileAction>) => {
    return {
        handleImportedProjectFile: (fileContent: string) => dispatch(handleImportedProjectFileAction({ fileContent }))
    }
}


export default connect<{}, DispatchProps, OwnProps, {}>(
    null,
    mapDispatchToProps
)(FileImport);