import React from "react";
import "./SVGActors.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class SVGActors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
    console.log("SVGActors mounted");
  }

  render() {
    console.log("SVGActors rendered");
    return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <ul className="navbar-nav nav-fill w-100 d-flex justify-content-between">
            <li className="nav-item active"><a className="nav-link" href="#1">Actors</a></li>
            <li className="nav-item"><a className="nav-link" href="#2">Tricks</a></li>
            <li className="nav-item"><a className="nav-link" href="#3">Scenario</a></li>
          </ul>
      </nav>
      <div className="w-100 d-flex mt-2 justify-content-around">
        <h1 className="test">Actors</h1> 
        <span onClick={() => this.props.addActor("test")}><FontAwesomeIcon className="mt-2" icon={faPlus} size="2x" /></span>
      </div>
    </React.Fragment>
    );
  }
}

export default SVGActors;
