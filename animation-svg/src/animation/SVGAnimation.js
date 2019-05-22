import React from "react";
import "./SVGAnimation.css";
import SVGFiguresList from "./SVGFiguresList/SVGFiguresList";
import SVGProjectsList from "./SVGProjectsList/SVGProjectsList";
import SVGFigureEditor from "./SVGEditors/SVGFigureEditor/SVGFigureEditor";
import SVGAnimationEditor from "./SVGEditors/SVGAnimationEditor/SVGAnimationEditor";
import SVGCanvas from "./SVGCanvas/SVGCanvas";
import { Figure } from "./static/Figure";
import { FiguresForProjects } from "./static/StartingData";
import { Project } from "./static/Project";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import SVGEditorNav from "./SVGEditorNav/SVGEditorNav";
import SVGProjectsFiguresNav from "./SVGProjectsFiguresNav/SVGProjectsFiguresNav";
import ActiveListElement from "./static/ActiveListElement";


//TODO edit project name
//TODO use SVG inline instead of fontawesome
class SVGAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [],
      selectedProject: null,
      figuresList: [],
      selectedFigure: null,
      ifAnimationEditionMode: false,
      ifProjectCreationMode: true,
      svgDimensions: [500, 500]
    };
  }

  componentDidMount() {
    const projectList = [...Array(FiguresForProjects.length)].map((value, index) => {
      let project = new Project();
      project.figuresList = FiguresForProjects[index];
      return project;
    });
    this.setState({
      projectList,
      selectedProject: projectList[0],
      figuresList: projectList[0].figuresList,
      selectedFigure: projectList[0].figuresList[0],
    });
    console.log("SVGAnimation Mounted");
  }

  isActiveListElement = (elementType, elementId) => {
    let selectedElementId = null;
    switch (elementType) {
      case ActiveListElement.Figure:
        selectedElementId = this.state.selectedFigure !== null ? this.state.selectedFigure.id : -1;
        break;
      case ActiveListElement.Project:
        selectedElementId = this.state.selectedProject !== null ? this.state.selectedProject.id : -1;
        break;
      default:
        break;
    }
    return selectedElementId === elementId ? 'active-list-element' : "";;
  }


  isActiveEditor = (value) => {
    return value === this.state.ifAnimationEditionMode ? " active" : ""
  }

  addFigure = () => {
    this.setState(prevState => ({
      figuresList: [...prevState.figuresList, new Figure()],
    }));
  }

  updateProjectState(figuresList) {
    let projectList = [...this.state.projectList];
    let selectedProject = this.state.selectedProject;
    let projectToUpdateIndex = projectList.findIndex(project => project.id === selectedProject.id);
    projectList[projectToUpdateIndex].figuresList = figuresList;
    selectedProject.figuresList = figuresList;
    this.setState({ projectList, selectedProject });
  }

  deleteFigure = (e, id) => {
    e.stopPropagation();
    let figuresList = [...this.state.figuresList];
    let figureToDeleteIndex = figuresList.findIndex(figure => figure.id === id);
    figuresList.splice(figureToDeleteIndex, 1);
    let isSelectedFigure = this.state.selectedFigure !== null
      ? this.state.selectedFigure.id === id
      : false;

    this.updateProjectState(figuresList);

    isSelectedFigure
      ? this.setState({ figuresList, selectedFigure: null })
      : this.setState({ figuresList });
  }


  renderFiguresList = () => {
    return this.state.figuresList.map((item, key) => {
      return (
        <li
          key={item.id + item.name}
          className={'list-group-item list-figure ' + this.isActiveListElement(ActiveListElement.Figure, item.id)}
          onClick={() => this.showFigureEditor(item.id)}>
          {item.name}
          <FontAwesomeIcon
            onClick={(e) => this.deleteFigure(e, item.id)}
            className="delete-figure"
            icon={faTrash}
            size="1x" />
        </li>
      );
    });
  }

  changeFigureValue = (type, value) => {
    let figuresList = [...this.state.figuresList];
    let selectedFigure = this.state.selectedFigure;
    let selectedFigureIndex = figuresList.findIndex(figure => figure.id === selectedFigure.id);
    switch (type) {
      case "name": {
        selectedFigure.name = value;
        break;
      }
      case "figureType": {
        selectedFigure.figureType = value;
        if (value === 'Square') selectedFigure.numOfSides = 4;
        break;
      }
      case "size": {
        selectedFigure.size = value;
        break;
      }
      case "xPosition": {
        selectedFigure.xPosition = value;
        break;
      }
      case "yPosition": {
        selectedFigure.yPosition = value;
        break;
      }
      case "numOfSides": {
        selectedFigure.numOfSides = value;
        break;
      }
      case "opacity": {
        selectedFigure.opacity = value;
        break;
      }
      case "fill": {
        selectedFigure.fill = value;
        break;
      }
      case "stroke": {
        selectedFigure.stroke = value;
        break;
      }
      case "strokeWidth": {
        selectedFigure.strokeWidth = value;
        break;
      }
      case "attributeName": {
        selectedFigure.animation.attributeName = value;
        break;
      }
      case "from": {
        selectedFigure.animation.from = value;
        break;
      }
      case "to": {
        selectedFigure.animation.to = value;
        break;
      }
      case "dur": {
        selectedFigure.animation.dur = value;
        break;
      }
      default: {
        break;
      }
    }
    figuresList[selectedFigureIndex] = selectedFigure;

    this.updateProjectState(figuresList);
    this.setState({ figuresList, selectedFigure });
  }


  showFigureEditor = (id) => {
    let selectedFigure = this.state.figuresList.find(figure => figure.id === id);
    this.setState({ selectedFigure });
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
    this.setState({ selectedProject, figuresList: selectedProject.figuresList });
  }

  renderProjectsList = () => {
    return this.state.projectList.map((item, key) => {
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
    });
  }

  handleProjectFigureTabChange = (value) => {
    this.setState({ ifProjectCreationMode: value });
  }

  isActiveProjectFigureTab = (value) => {
    return value === this.state.ifProjectCreationMode ? " active" : "";
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
    return (
      <div className="container-fluid h-100 bg-white">
        <div className="row h-100">
          <div className="projects-figures col-lg-3 p-0 border-right overflow-auto">
            <SVGProjectsFiguresNav
              handleProjectFigureTabChange={this.handleProjectFigureTabChange}
              isActiveProjectFigureTab={this.isActiveProjectFigureTab}
            />
            {this.state.ifProjectCreationMode
              ? <SVGProjectsList
                addProject={this.addProject}
                renderProjectsList={this.renderProjectsList}
                exportProjects={this.exportProjects}
                exportSelectedProject={this.exportSelectedProject}
                handleImportProjectsJson={this.handleImportProjectsJson} />
              :
              <SVGFiguresList
                addFigure={this.addFigure}
                renderFiguresList={this.renderFiguresList} />
            }
          </div>
          <div className="col-lg-5 p-0 h-100" >
            <SVGCanvas figures={this.state.figuresList}
              svgDimensions={this.state.svgDimensions}
              showFigureEditor={this.showFigureEditor}
              setNewFigures={this.setNewFigures}
            />
          </div>
          <div className="col-lg-4 h-100 bg-light overflow-auto border">
            <SVGEditorNav
              handleEditorTabChange={this.handleEditorTabChange}
              isActiveEditor={this.isActiveEditor}
            />
            {this.state.ifAnimationEditionMode
              ? <SVGAnimationEditor
                changeFigureValue={this.changeFigureValue}
                selectedFigure={this.state.selectedFigure}
                svgDimensions={this.state.svgDimensions} />
              : <SVGFigureEditor
                changeFigureValue={this.changeFigureValue}
                selectedFigure={this.state.selectedFigure} />
            }
          </div>

        </div>
      </div>
    );
  }
}

export default SVGAnimation;
