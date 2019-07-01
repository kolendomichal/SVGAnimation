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
import { Figure } from "./static/Figure";
import { InitialState } from "./redux/initialState";

type StateProps = {
  ifProjectCreationMode: boolean,
  selectedFigure: Figure,
  ifAnimationEditionMode: boolean
}
class SVGAnimation extends React.PureComponent<StateProps> {

  componentDidMount() {
    console.log("SVGAnimation Mounted");
  }

  render() {
    console.log("SVGAnimation render");
    const { selectedFigure, ifAnimationEditionMode, ifProjectCreationMode } = this.props;
    return (
      <div className="container-fluid h-100 bg-white">
        <div className="row h-100">
          <div className="projects-figures col-lg-3 p-0 border-right overflow-auto">
            <SVGProjectsFiguresNav />
            {ifProjectCreationMode
              ? <SVGProjectsList />
              : <SVGFiguresList />
            }
          </div>
          <div className="col-lg-5 p-0 h-100" >
            <SVGCanvas />
          </div>
          <div className="col-lg-4 h-100 bg-light overflow-auto border">
            <SVGEditorNav />
            {selectedFigure &&
              (ifAnimationEditionMode
                ? <SVGAnimationEditor />
                : <SVGFigureEditor />
              )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: InitialState): StateProps => {
  const { selectedFigure } = state.figuresProjects.present;
  const { ifProjectCreationMode, ifAnimationEditionMode } = state.selectedList;
  return { selectedFigure, ifProjectCreationMode, ifAnimationEditionMode };
}

export default connect<StateProps,{},{},InitialState>(
  mapStateToProps,
)(SVGAnimation)
