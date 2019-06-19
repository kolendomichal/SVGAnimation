import React from "react";
import { connect } from "react-redux";
import "./SVGFiguresList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addFigureAction, deleteFigureAction, showFigureEditorActon } from "../redux/actions";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class SVGFiguresList extends React.PureComponent {

  isActiveListElement(elementId) {
    var selectedElementId = this.props.selectedFigure !== null ? this.props.selectedFigure.id : -1;
    return selectedElementId === elementId ? 'active-list-element' : "";;
  }
  deleteFigureFromList(e, id) {
    e.stopPropagation();
    this.props.deleteFigure(id);
  }
  render() {
    const { figuresList, addFigure, showFigureEditor } = this.props;
    console.log("SVGFiguresList render")
    
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
                  className={'list-group-item list-figure ' + this.isActiveListElement(item.id)}
                  onClick={() => showFigureEditor(item.id)}
                >
                  {item.name}
                  <FontAwesomeIcon
                    onClick={(e) => this.deleteFigureFromList(e, item.id)}
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
  const { figuresList, selectedFigure } = state.svgAnimation;
  return { figuresList, selectedFigure };
}

const mapDispatchToProps = dispatch => {
  return {
    addFigure: () => dispatch(addFigureAction()),
    deleteFigure: (id) => dispatch(deleteFigureAction(id)),
    showFigureEditor: (id) => dispatch(showFigureEditorActon(id))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SVGFiguresList)

