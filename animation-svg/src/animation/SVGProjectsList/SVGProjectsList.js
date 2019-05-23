import React from 'react';
import "./SVGProjectsList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FileImport from './FileImport/FileImport';
import validator from 'validator';

function SVGProjectsList(props) {

    return (
        <div className="svg-project-list">
            <div className="bg-secondary text-white">
                <span className="figures-header text-left pl-2">Projects</span>
                <span className="mt-4 mr-4 float-right" onClick={() => props.addProject()}>
                    <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
                </span>
            </div>
            <div className="project-list overflow-auto border-bottom ">
                {props.renderProjectsList()}
            </div>
            <div className="col-lg-12 mb-1 project-export-button-group d-flex justify-content-between">
                <FileImport
                    buttonTitle={"Import projects"}
                    fileType={".json"}
                    fileValidate={validator.isJSON}
                    importIdentificator={"projectImport"}
                    importModalHeader={"SVG Animation - import project"}
                    importFilePlaceholder={"Choose projects json file..."}
                    handleImportedFile={props.handleImportProjectsJson}
                />
                <button className="btn btn-secondary project-button" onClick={() => props.exportSelectedProject()}><p>Export <br /> Selected Project</p></button>
                <button className="btn btn-secondary project-button" onClick={() => props.exportProjects()}><p>Export <br /> Projects</p></button>
            </div>
        </div>
    );
}

export default SVGProjectsList;