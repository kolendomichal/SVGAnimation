import React from "react";
import "./SVGAnimation.css";
import { connect } from "react-redux";
import SVGFiguresList from "./SVGFiguresList/SVGFiguresList";
import SVGProjectsList from "./SVGProjectsList/SVGProjectsList";
import SVGFigureEditor from "./SVGEditors/SVGFigureEditor/SVGFigureEditor";
import SVGAnimationEditor from "./SVGEditors/SVGAnimationEditor/SVGAnimationEditor";
import FigureTypes from './static/FigureTypes';
import SVGCanvas from "./SVGCanvas/SVGCanvas";
import SVGEditorNav from "./SVGEditorNav/SVGEditorNav";
import SVGProjectsFiguresNav from "./SVGProjectsFiguresNav/SVGProjectsFiguresNav";


//Todo backing up recent action
class SVGAnimation extends React.Component {

  componentDidMount() {
    console.log("SVGAnimation Mounted");
  }


  setNewFigures = (figuresList) => {
    this.updateProjectState(figuresList);
    this.setState({ figuresList });
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
    console.log(this.props.ifAnimationEditionMode);
    
    return (
        <div className="container-fluid h-100 bg-white">
          <div className="row h-100">
            <div className="projects-figures col-lg-3 p-0 border-right overflow-auto">
              <SVGProjectsFiguresNav/>
              {this.props.ifProjectCreationMode
                ? <SVGProjectsList
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
              <SVGEditorNav/>
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
    );
  }
}

const mapStateToProps = (state) => {
  const {projectList, figuresList, selectedFigure, selectedProject, ifProjectCreationMode,ifAnimationEditionMode} = state.svgAnimation;
  return { projectList, figuresList, selectedFigure, selectedProject,ifProjectCreationMode ,ifAnimationEditionMode};
}

export default connect(
  mapStateToProps,
)(SVGAnimation)
