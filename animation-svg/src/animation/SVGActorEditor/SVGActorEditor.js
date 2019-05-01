import React from "react";
import "./SVGActorEditor.css";

class SVGActorEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      //Total bullshit here
    const object = this.props.addActor();

    return <React.Fragment>{object}</React.Fragment>;
  }
}

export default SVGActorEditor;
