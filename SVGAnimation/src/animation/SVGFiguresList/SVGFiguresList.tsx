import React from "react";
import { connect } from "react-redux";
import "./SVGFiguresList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addFigureAction, deleteFigureAction, showFigureEditorAction, SVGFiguresListActions } from "../redux/reducers/figuresProjects/actions";
import { Figure } from "../static/Figure";
import { InitialState } from "../redux/initialState";
import { Dispatch } from "redux";

type StateProps = {
  figuresList: Figure[],
  selectedFigure: Figure
}

type DispatchProps = {
  addFigure: () => void,
  showFigureEditor: (id: number) => void,
  deleteFigure: (id: number) => void
}

type Props = StateProps & DispatchProps

class SVGFiguresList extends React.PureComponent<Props> {

  isActiveListElement(elementId: number) {
    var selectedElementId = this.props.selectedFigure ? this.props.selectedFigure.id : -1;
    return selectedElementId === elementId ? 'active-list-element' : "";;
  }

  deleteFigureFromList(e: any, id: number) {
    e.stopPropagation();
    this.props.deleteFigure(id);
  }

  render() {
    const { figuresList, addFigure, showFigureEditor } = this.props;
    console.log("SVGFiguresList render")
    return (
      <div className="svg-figures-list">
        <div className="bg-secondary text-white" style={{ height: '7vh' }}>
          <span className="figures-header text-left pl-2">Figures</span>
          <span className="mt-4 mr-4 float-right" onClick={() => addFigure()}>
            <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
          </span>
        </div>
        <div className="figures-list overflow-auto">
          <ul id="figures-list" className="list-group bg-light text-left">
            {figuresList && figuresList.map((item) => {
              return (
                <li
                  key={item.id + item.name}
                  className={'list-group-item list-figure ' + this.isActiveListElement(item.id)}
                  onClick={() => showFigureEditor(item.id)}
                >
                  {item.name}
                  <span onClick={(e: any) => this.deleteFigureFromList(e, item.id)}>
                    <FontAwesomeIcon
                      className="delete-figure"
                      icon={faTrash}
                      size="1x" />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: InitialState): StateProps => {
  const { figuresList, selectedFigure } = state.figuresProjects.present;
  return { figuresList, selectedFigure };
}

const mapDispatchToProps = (dispatch: Dispatch<SVGFiguresListActions>): DispatchProps => {
  return {
    addFigure: () => dispatch(addFigureAction()),
    deleteFigure: (id) => dispatch(deleteFigureAction(id)),
    showFigureEditor: (id) => dispatch(showFigureEditorAction(id))
  }
}
export default connect<StateProps, DispatchProps, {}, InitialState>(
  mapStateToProps,
  mapDispatchToProps
)(SVGFiguresList)

