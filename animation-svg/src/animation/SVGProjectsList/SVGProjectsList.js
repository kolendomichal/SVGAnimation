import React from 'react';
import "./SVGProjectsList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FileImport from './FileImport/FileImport';
import validator from 'validator';

function SVGProjectsList(props) {

    return (
        <React.Fragment>
            <div className="bg-secondary text-white">
                <span className="figures-header text-left pl-2">Projects</span>
                <span className="mt-4 mr-4 float-right" onClick={() => props.addProject()}>
                    <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
                </span>
            </div>
            <div className="project-list overflow-auto border-bottom ">
                <ul id="figures-list" className="list-group bg-light text-left">
                    {props.renderProjectsList()}
                </ul>
            </div>
            <div className="col-lg-12 pt-2 mb-4 project-export-button-group d-flex justify-content-between">
                <FileImport 
                    buttonTitle={"Import projects"}
                    fileType={".json"}
                    fileValidate={validator.isJSON}
                    importIdentificator={"projectImport"}
                    importModalHeader={"SVG Animation - import project"}
                    importFilePlaceholder={"Choose projects json file..."} 
                    handleImportedFile={props.handleImportProjectsJson}
                >
                </FileImport>
                <button className="btn btn-secondary" onClick={() => props.exportSelectedProject()}><p className="h5">Export <br /> Selected Project</p></button>
                <button className="btn btn-secondary" onClick={() => props.exportProjects()}><p className="h5">Export <br /> Projects</p></button>
            </div>
        </React.Fragment>


    );
}

export default SVGProjectsList;