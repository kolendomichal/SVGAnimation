import React from 'react';
import "./SVGProjectsList.css"
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FileImport from './FileImport/FileImport';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Project } from '../static/Project';
import { InitialState } from '../redux/initialState';
import { Dispatch } from 'redux';
import { deleteProjectAction, addProjectAction, setCurrentProjectAction, SVGProjectsListActions } from '../redux/reducers/figuresProjects/actions';


type StateProps = {
    selectedProject: Project,
    projectList: Project[]
}

type DispatchProps = {
    addProject: () => void,
    deleteProject: (id: string) => void,
    setCurrentProject: (id: string) => void
}

type Props = StateProps & DispatchProps

class SVGProjectsList extends React.PureComponent<Props> {

    isActiveListElement(elementId: string) {
        var selectedElementId = this.props.selectedProject !== null ? this.props.selectedProject.id : -1;
        return selectedElementId === elementId ? 'active-list-element' : "";;
    }

    deleteProjectFromList(e: any, id: string) {
        e.stopPropagation();
        this.props.deleteProject(id);
    }

    downloadObjectAsJson = (exportObj: Project[] | Project, exportName: string) => {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    exportProjects = () => {
        this.downloadObjectAsJson(this.props.projectList, 'projects')
    }

    exportSelectedProject = () => {
        this.downloadObjectAsJson(this.props.selectedProject, 'ProjectName');
    }

    render() {
        // console.log("SVGProjectsList render");
        const { projectList, addProject, setCurrentProject } = this.props;
        return (
            <div className="svg-project-list">
                <div className="bg-secondary text-white" style={{ height: '7vh' }}>
                    <span className="figures-header text-left pl-2">Projects</span>
                    <span className="mt-4 mr-4 float-right" onClick={() => addProject()}>
                        <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
                    </span>
                </div>
                <div className="project-list overflow-auto border-bottom ">
                    <ul id="figures-list" className="list-group bg-light text-left">
                        {projectList && projectList.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className={'list-group-item list-project ' + this.isActiveListElement(item.id)}
                                    onClick={() => setCurrentProject(item.id)}>
                                    {<p className="h3">
                                        {item.name}
                                        <span onClick={(e) => this.deleteProjectFromList(e, item.id)} >
                                            <FontAwesomeIcon
                                                className="delete-project"
                                                icon={faTrash}
                                                size="1x" />
                                        </span>
                                    </p>}

                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="col-lg-12 mb-1 project-export-button-group d-flex justify-content-between">
                    <FileImport
                        buttonTitle={"projects"}
                        fileType={".json"}
                        importIdentificator={"projectImport"}
                        importModalHeader={"SVG Animation - import project"}
                        importFilePlaceholder={"Choose projects json file..."}

                    />
                    <button className="btn btn-secondary project-button h-100" onClick={() => this.exportSelectedProject()}><p>Export <br /> Selected Project</p></button>
                    <button className="btn btn-secondary project-button h-100" onClick={() => this.exportProjects()}><p>Export <br /> Projects</p></button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: InitialState): StateProps => {
    const { selectedProject, projectList } = state.figuresProjects.present;
    return { selectedProject, projectList };
}

const mapDispatchToProps = (dispatch: Dispatch<SVGProjectsListActions>) => {
    return {
        addProject: () => dispatch(addProjectAction()),
        deleteProject: (id: string) => dispatch(deleteProjectAction({id})),
        setCurrentProject: (id: string) => dispatch(setCurrentProjectAction({id}))
    }
}

export default connect<StateProps, DispatchProps, {}, InitialState>(
    mapStateToProps,
    mapDispatchToProps
)(SVGProjectsList)
