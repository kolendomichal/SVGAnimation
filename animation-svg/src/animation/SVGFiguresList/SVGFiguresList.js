import React from "react";
import "./SVGFiguresList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class SVGFiguresList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("SVGFigures mounted");
  }

  render() {
    console.log("SVGFigures rendered");
    return (
    <React.Fragment>
      <div className="bg-secondary text-white">
        <span className ="figures-header text-left pl-2">Figures</span> 
        <span className="mt-4 mr-4 float-right" onClick={() => this.props.addFigure()}>
          <FontAwesomeIcon className="add-figure" icon={faPlus} size="2x" />
        </span>
      </div>
      <ul id="figures-list" className="list-group bg-light text-left">
        {this.props.renderFiguresList()}
      </ul>
    </React.Fragment>
    );
  }
}

export default SVGFiguresList;
