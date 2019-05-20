import React, { useState, useEffect } from 'react';

function FileImport(props) {

    const [fileContent, setFileContent] = useState(null);
    const [fileName, setFileName] = useState(props.importFilePlaceholder);
    const [ifCorrectFile, setFileValidation] = useState(false);
    const fileReader = new FileReader();
    const fileType = props.fileType;
    
    useEffect(() => {
        if (fileContent && !props.fileValidate(fileContent)) {
            setFileName(`Please check if your ${fileType} is correct.`)
            setFileValidation(false)
        } else {
            setFileValidation(true);
        }
        // eslint-disable-next-line
    }, [fileContent]);

    function handleChooseFile(evt) {
        if (evt.target.files[0]) {
            let file = evt.target.files[evt.target.files.length - 1];

            if (!file.name.endsWith(fileType)) {
                setFileName(`Only ${fileType} files are allowed!`)
                return;
            }

            fileReader.readAsText(file, "UTF-8");
            fileReader.onload = () => {
                setFileContent(fileReader.result);
            }
            setFileName(file.name);
        }
    }

    return (
        <React.Fragment>
            <button type="button" className="btn btn-secondary " data-toggle="modal" data-target={`#${props.importIdentificator}`}><p className="h5"> {props.buttonTitle} </p>  </button>
            <div className="modal fade" id={props.importIdentificator} tabIndex="-1" role="dialog" aria-labelledby="importModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="importModalLabel">{props.importModalHeader}</h5>
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
                                        onChange={(evt) => handleChooseFile(evt)} onClick={(event) => { event.target.value = null }} />
                                    <label className="custom-file-label">{fileName}</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {ifCorrectFile
                                ? <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => props.handleImportedFile(fileContent)}>Import</button>
                                : <button type="button" disabled className="btn btn-primary" data-dismiss="modal">Import</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FileImport;