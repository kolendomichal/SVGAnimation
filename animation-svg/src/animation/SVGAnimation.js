import React from "react";
import "./SVGAnimation.css";
import SVGActors from "./actors/SVGActors";
import SVGActorEditor from "./SVGActorEditor/SVGActorEditor";

class SVGAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedActor: "actor",
      actors: []
    };
  }
  componentDidMount() {
    console.log("SVGAnimation Mounted");
  }

  addActor = (actor) => {
    this.setState(prevState => ({
      actors: [...prevState.actors, actor]
    }));
  }

  renderActors(){
    return <div>
              {this.state.actors.map(function (item, i){
                return <div>{item}</div>
              })}
      </div>
  }
  render() {
    console.log("SVGAnimation rendered");
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 p-0">
            <SVGActors addActor={this.addActor} />
          </div>
          <div className="col-lg-4 ">
          {this.renderActors()}
            {/* <SVGActorEditor addActor={this.addActor} /> */}
          </div>
          <div className="col-lg-5 " />
        </div>
      </div>
    );
  }
}

export default SVGAnimation;
