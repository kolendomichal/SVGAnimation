import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./SVGFiguresList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ADD_FIGURE, DELETE_FIGURE, SHOW_FIGURE_EDITOR } from "../redux/actionTypes";
import ActiveListElement from "../static/ActiveListElement";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class SVGFiguresList extends React.PureComponent {
  
  isActiveListElement = (elementType, elementId) =>{
    var selectedElementId = null;
    switch (elementType) {
      case ActiveListElement.Figure:
        selectedElementId = this.props.selectedFigure !== null ? this.props.selectedFigure.id : -1;
        break;
      case ActiveListElement.Project:
        selectedElementId = this.props.selectedProject !== null ? this.props.selectedProject.id : -1;
        break;
      default:
        break;
    }
    return selectedElementId === elementId ? 'active-list-element' : "";;
  }

  render() {
    const { figuresList, addFigure, deleteFigure,showFigureEditor } = this.props;
    console.log(figuresList);

    return (
      <div className="svg-figures-list">
        <div className="bg-secondary text-white">
          <span className="figures-header text-left pl-2">Figures</span>
          <span className="mt-4 mr-4 float-right" onClick={() => addFigure()}>
            <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
          </span>
        </div>
        <div className="figures-list overflow-auto">
          <ul id="figures-list" className="list-group bg-light text-left">
            {figuresList.map((item) => {
              return (
                <li
                  key={item.id + item.name}
                  className={'list-group-item list-figure ' + this.isActiveListElement(ActiveListElement.Figure, item.id)}
                  onClick={() => showFigureEditor(item.id)}
                >
                  {item.name}
                  <FontAwesomeIcon
                    onClick={(e) => deleteFigure(e, item.id)}
                    className="delete-figure"
                    icon={faTrash}
                    size="1x" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { figuresList,selectedFigure, selectedFigureId } = state.svgAnimation;
  console.log(figuresList, "figuresList")

  return { figuresList,selectedFigure,selectedFigureId };
}

const mapDispatchToProps = dispatch => {
  return {
    addFigure: () => dispatch({ type: ADD_FIGURE }),
    deleteFigure: (e, id) => dispatch({ type: DELETE_FIGURE, payload: { e, id } }),
    showFigureEditor: (id) => dispatch({ type: SHOW_FIGURE_EDITOR, payload: { id } })
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SVGFiguresList)

