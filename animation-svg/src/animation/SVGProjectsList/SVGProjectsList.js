import React from 'react';
import "./SVGProjectsList.css"
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FileImport from './FileImport/FileImport';
import validator from 'validator';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { setCurrentProjectAction, deleteProjectAction, addProjectAction } from '../redux/actions';

class SVGProjectsList extends React.PureComponent {

    isActiveListElement(elementId) {
        var selectedElementId = this.props.selectedProject !== null ? this.props.selectedProject.id : -1;
        return selectedElementId === elementId ? 'active-list-element' : "";;
    }

    render() {
        const { projectList, addProject, deleteProject, setCurrentProject } = this.props;
        return (
            <div className="svg-project-list">
                <div className="bg-secondary text-white">
                    <span className="figures-header text-left pl-2">Projects</span>
                    <span className="mt-4 mr-4 float-right" onClick={() => addProject()}>
                        <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
                    </span>
                </div>
                <div className="project-list overflow-auto border-bottom ">
                    <ul id="figures-list" className="list-group bg-light text-left">
                        {projectList.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className={'list-group-item list-project ' + this.isActiveListElement(item.id)}
                                    onClick={() => setCurrentProject(item.id)}>
                                    {<p className="h3">
                                        {item.name}
                                        <FontAwesomeIcon
                                            onClick={(e) => deleteProject(e, item.id)}
                                            className="delete-project"
                                            icon={faTrash}
                                            size="1x" />
                                    </p>}

                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="col-lg-12 mb-1 project-export-button-group d-flex justify-content-between">
                    <FileImport
                        buttonTitle={"Import projects"}
                        fileType={".json"}
                        fileValidate={validator.isJSON}
                        importIdentificator={"projectImport"}
                        importModalHeader={"SVG Animation - import project"}
                        importFilePlaceholder={"Choose projects json file..."}
                        handleImportedFile={this.props.handleImportProjectsJson}
                    />
                    <button className="btn btn-secondary project-button" onClick={() => this.props.exportSelectedProject()}><p>Export <br /> Selected Project</p></button>
                    <button className="btn btn-secondary project-button" onClick={() => this.props.exportProjects()}><p>Export <br /> Projects</p></button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { selectedProject, projectList } = state.svgAnimation;
    return { selectedProject, projectList };
}

const mapDispatchToProps = dispatch => {
    return {
        addProject: () => dispatch(addProjectAction()),
        deleteProject: (e, id) => dispatch(deleteProjectAction(e, id)),
        setCurrentProject: (id) => dispatch(setCurrentProjectAction(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SVGProjectsList)
