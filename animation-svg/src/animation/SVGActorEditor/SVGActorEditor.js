import React from "react";
import "./SVGActorEditor.css";
import "./input-range.css";

import InputRange from "react-input-range";

class SVGActorEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPosition: 0
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.props.selectedActor && (
        <React.Fragment>
          <div className="ml-2 mt-4 text-dark"> X position </div>
          <div className="row">
            <div className="col-lg-9 mt-4 ">
              <InputRange
                minValue={0}
                maxValue={250}
                value={this.state.xPosition}
                onChange={(xPosition) => this.setState({xPosition})}
                onChangeComplete={(xPosition) => this.props.changeXposition(xPosition)}
              />
            </div>
            <div className="col-lg-3 mt-3">
               {/* TODO handle onChange in input  */}
              <input type="text" className="form-control" value={this.props.selectedActor.xPosition} onChange={(value) => this.props.changeXposition(value)} />
            </div>
          </div>
        </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default SVGActorEditor;
