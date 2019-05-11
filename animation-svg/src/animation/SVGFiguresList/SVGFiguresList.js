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
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <ul className="navbar-nav nav-fill w-100 d-flex justify-content-between">
            <li className="nav-item active"><a className="nav-link" href="#1">Figures</a></li>
            <li className="nav-item"><a className="nav-link" href="#2">Tricks</a></li>
            <li className="nav-item"><a className="nav-link" href="#3">Scenario</a></li>
          </ul>
      </nav>
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
