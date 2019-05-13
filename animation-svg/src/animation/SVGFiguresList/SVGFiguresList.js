import React from "react";
import "./SVGFiguresList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function SVGFiguresList(props) {

  return (
    <React.Fragment>
      <div className="bg-secondary text-white">
        <span className="figures-header text-left pl-2">Figures</span>
        <span className="mt-4 mr-4 float-right" onClick={() => props.addFigure()}>
          <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
        </span>
      </div>
      <ul id="figures-list" className="list-group bg-light text-left">
        {props.renderFiguresList()}
      </ul>
    </React.Fragment>
  );
}

export default SVGFiguresList;
