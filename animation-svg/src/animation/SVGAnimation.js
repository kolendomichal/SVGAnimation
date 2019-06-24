import React from "react";
import "./SVGAnimation.css";
import { connect } from "react-redux";
import SVGFiguresList from "./SVGFiguresList/SVGFiguresList";
import SVGProjectsList from "./SVGProjectsList/SVGProjectsList";
import SVGFigureEditor from "./SVGEditors/SVGFigureEditor/SVGFigureEditor";
import SVGAnimationEditor from "./SVGEditors/SVGAnimationEditor/SVGAnimationEditor";
import SVGCanvas from "./SVGCanvas/SVGCanvas";
import SVGEditorNav from "./SVGEditorNav/SVGEditorNav";
import SVGProjectsFiguresNav from "./SVGProjectsFiguresNav/SVGProjectsFiguresNav";


class SVGAnimation extends React.PureComponent {

  componentDidMount() {
    console.log("SVGAnimation Mounted");
  }

  render() {
    console.log("SVGAnimation render");
    return (
      <div className="container-fluid h-100 bg-white">
        <div className="row h-100">
          <div className="projects-figures col-lg-3 p-0 border-right overflow-auto">
            <SVGProjectsFiguresNav />
            {this.props.ifProjectCreationMode
              ? <SVGProjectsList />
              : <SVGFiguresList />
            }
          </div>
          <div className="col-lg-5 p-0 h-100" >
            <SVGCanvas />
          </div>
          <div className="col-lg-4 h-100 bg-light overflow-auto border">
            <SVGEditorNav />
            {this.props.selectedFigure &&
              (this.props.ifAnimationEditionMode
                ? <SVGAnimationEditor />
                : <SVGFigureEditor />
              )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedFigure } = state.figuresProjects.present;
  const { ifProjectCreationMode, ifAnimationEditionMode } = state.selectedList;
  return { selectedFigure, ifProjectCreationMode, ifAnimationEditionMode };
}

export default connect(
  mapStateToProps,
)(SVGAnimation)
