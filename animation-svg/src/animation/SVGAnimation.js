import React from "react";
import "./SVGAnimation.css";
import SVGActors from "./SVGActors/SVGActors";
import SVGActorEditor from "./SVGActorEditor/SVGActorEditor";
import { Actor } from "./static/actor";

class SVGAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedActor: null,
      actors: []
    };
  }
  componentDidMount() {
    console.log("SVGAnimation Mounted");
  }

  addActor = () => {
    let actor = new Actor();
    actor.id = this.state.actors.length + 1;
    this.setState(prevState => ({
      actors: [...prevState.actors, actor]
    }));
  }
  showActorEditor = (id) => {
    let selectedActor = this.state.actors.find(actor => actor.id === id);
    this.setState({selectedActor});
  }

  renderActorsList = () =>{
    return this.state.actors.map( (item, key) => {
      return (
        <li key={item.id} className="list-group-item list-actor" onClick={() => this.showActorEditor(item.id)}>{item.name} {item.id}</li>
      );
    });
  }

  changeXposition = (xPosition) => {
    let actors = [...this.state.actors];
    let selectedActor = this.state.selectedActor;
    let selectedActorIndex = actors.findIndex(actor => actor.id === selectedActor.id);

    selectedActor.xPosition = xPosition;
    actors[selectedActorIndex] = selectedActor;

    this.setState({actors,selectedActor});
  }
  render() {
    console.log("SVGAnimation rendered");
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 p-0">
            <SVGActors 
              addActor={this.addActor} 
              renderActorsList={this.renderActorsList} />
          </div>
          <div className="col-lg-4 bg-light">
           <SVGActorEditor 
              changeXposition={this.changeXposition}
              selectedActor={this.state.selectedActor} /> 
          </div>
          <div className="col-lg-5 " />
        </div>
      </div>
    );
  }
}

export default SVGAnimation;
