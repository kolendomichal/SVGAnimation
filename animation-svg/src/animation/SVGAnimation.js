import React from "react";
import "./SVGAnimation.css";
import { connect } from "react-redux";
import SVGFiguresList from "./SVGFiguresList/SVGFiguresList";
import SVGProjectsList from "./SVGProjectsList/SVGProjectsList";
import SVGFigureEditor from "./SVGEditors/SVGFigureEditor/SVGFigureEditor";
import SVGAnimationEditor from "./SVGEditors/SVGAnimationEditor/SVGAnimationEditor";
import FigureTypes from './static/FigureTypes';
import SVGCanvas from "./SVGCanvas/SVGCanvas";
import { Figure } from "./static/Figure";
import { FiguresForProjects } from "./static/StartingData";
import { Project } from "./static/Project";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import SVGEditorNav from "./SVGEditorNav/SVGEditorNav";
import SVGProjectsFiguresNav from "./SVGProjectsFiguresNav/SVGProjectsFiguresNav";
import ActiveListElement from "./static/ActiveListElement";
import { SVGProvider } from "./SVGContext";
import { CHANGE_FIGURE_VALUE, UPDATE_PROJECT_STATE } from "./redux/actionTypes";

class SVGAnimation extends React.Component {

  componentDidMount() {
    console.log("SVGAnimation Mounted");
  }


  isActiveEditor = (value) => {
    return value === this.props.ifAnimationEditionMode ? " active" : ""
  }



  handleEditorTabChange = (value) => {
    this.setState({ ifAnimationEditionMode: value });
  }

  setNewFigures = (figuresList) => {
    this.updateProjectState(figuresList);
    this.setState({ figuresList });
  }



  addProject = () => {
    this.setState(prevState => ({
      projectList: [...prevState.projectList, new Project()],
    }));
  }

  deleteProject = (e, id) => {
    e.stopPropagation();
    let projectList = [...this.state.projectList];
    let projectToDeleteIndex = projectList.findIndex(project => project.id === id);
    projectList.splice(projectToDeleteIndex, 1);
    let isSelectedProject = this.state.selectedProject !== null
      ? this.state.selectedProject.id === id
      : false;

    isSelectedProject
      ? this.setState({ projectList, selectedProject: null, figuresList: [], selectedFigure: null })
      : this.setState({ projectList });
  }

  setCurrentProject = (id) => {
    let selectedProject = this.state.projectList.find(project => project.id === id);
    this.setState({ selectedProject, figuresList: selectedProject.figuresList, selectedFigure: null });
  }

  renderProjectsList = () => {
    return (
      <ul id="figures-list" className="list-group bg-light text-left">
        {this.props.projectList.map((item) => {
          return (
            <li
              key={item.id}
              className={'list-group-item list-project ' + this.isActiveListElement(ActiveListElement.Project, item.id)}
              onClick={() => this.setCurrentProject(item.id)}>
              {<p className="h3">
                {item.name}
                <FontAwesomeIcon
                  onClick={(e) => this.deleteProject(e, item.id)}
                  className="delete-project"
                  icon={faTrash}
                  size="1x" />
              </p>}

            </li>
          );
        })}
      </ul>)
  }

  handleProjectFigureTabChange = (value) => {
    this.setState({ ifProjectCreationMode: value });
  }

  isActiveProjectFigureTab = (value) => {
    return value === this.props.ifProjectCreationMode ? " active" : "";
  }

  handleImportProjectsJson = (jsonProjectArray) => {
    let projectArray = JSON.parse(jsonProjectArray);
    let projectList = this.state.projectList.concat(projectArray);
    this.setState({ projectList });
  }

  exportProjects = () => {
    this.downloadObjectAsJson(this.state.projectList, 'projects')
  }

  exportSelectedProject = () => {
    this.downloadObjectAsJson(this.state.selectedProject, 'ProjectName');
  }

  downloadObjectAsJson = (exportObj, exportName) => {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  render() {
    console.log("SVGAnimation rendered");
    const contextProviderValue = {
      changeFigureValue: this.changeFigureValue,
      selectedFigure: this.props.selectedFigure,
      selectedProject: this.props.selectedProject,
    }
    return (
      <SVGProvider value={contextProviderValue}>
        <div className="container-fluid h-100 bg-white">
          <div className="row h-100">
            <div className="projects-figures col-lg-3 p-0 border-right overflow-auto">
              <SVGProjectsFiguresNav
                handleProjectFigureTabChange={this.handleProjectFigureTabChange}
                isActiveProjectFigureTab={this.isActiveProjectFigureTab}
                selectedProject={this.props.selectedProject}
              />
              {this.props.ifProjectCreationMode
                ? <SVGProjectsList
                  addProject={this.addProject}
                  renderProjectsList={this.renderProjectsList}
                  exportProjects={this.exportProjects}
                  exportSelectedProject={this.exportSelectedProject}
                  handleImportProjectsJson={this.handleImportProjectsJson} />
                :
                <SVGFiguresList/>
              }
            </div>
            <div className="col-lg-5 p-0 h-100" >
              <SVGCanvas
                figures={this.props.figuresList}
                showFigureEditor={this.showFigureEditor}
                setNewFigures={this.setNewFigures}
              />
            </div>
            <div className="col-lg-4 h-100 bg-light overflow-auto border">
              <SVGEditorNav
                handleEditorTabChange={this.handleEditorTabChange}
                isActiveEditor={this.isActiveEditor}
              />
              {this.props.selectedFigure &&
                (this.props.ifAnimationEditionMode
                  ? <SVGAnimationEditor ifEnabled={this.props.selectedFigure.animationEnabled} />
                  : <SVGFigureEditor
                    selectNumberOfSides={this.props.selectedFigure.figureType === FigureTypes.Polygon}
                    headerForFigure={this.props.selectedFigure.figureType === FigureTypes.Circle} />
                )}
            </div>
          </div>
        </div>
      </SVGProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const {projectList, figuresList, selectedFigure, selectedProject} = state.svgAnimation;
  return { projectList, figuresList, selectedFigure, selectedProject };
}

const mapDispatchToProps = dispatch => {
  return {
    changeFigureValue: (figuresList,selectedFigure) => dispatch({ type: CHANGE_FIGURE_VALUE ,
      payload:{
        figuresList: figuresList,
        selectedFigure: selectedFigure,
      }}),
      updateProjectState: ( projectList,selectedProject) => dispatch({type: UPDATE_PROJECT_STATE, 
      payload:{
        projectList: projectList,
        selectedProject: selectedProject
      }})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SVGAnimation)
