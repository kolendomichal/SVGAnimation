import React from "react";
import "./SVGFiguresList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function SVGFiguresList(props) {
  return (
    <div className="svg-figures-list">
      <div className="bg-secondary text-white">
        <span className="figures-header text-left pl-2">Figures</span>
        <span className="mt-4 mr-4 float-right" onClick={() => props.addFigure()}>
          <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
        </span>
      </div>
      <div className="figures-list overflow-auto">
        {props.renderFiguresList()}
      </div>
    </div>
  );
}

export default SVGFiguresList;
