import React from "react";
import "./SVGActorEditor.css";
import "./input-range.css";
import InputRange from "react-input-range";

class InputNumberRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  //TODO Deprecated method, use getDerivedPropsFromState
  //This function is for slider to start from proper position
  componentWillReceiveProps(newProps) {
    if (this.props.selectedActor !== null && newProps.selectedActor !== null) {
      if (newProps.selectedActor.id !== this.props.selectedActor.id) {
        this.setState({ value: newProps.value });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.selectedActor && (
          <React.Fragment>
            <div className="ml-2 mt-4 text-dark"> {this.props.type}</div>
            <div className="row">
              <div className="col-lg-9 mt-4 ">
                <InputRange
                  minValue={0}
                  maxValue={250}
                  value={this.state.value}
                  onChange={value => this.setState({ value })}
                  onChangeComplete={value =>
                    this.props.changeSpecifiedValue(value)
                  }
                />
              </div>
              <div className="col-lg-3 mt-3">
                {/* TODO handle onChange in input  */}
                <input
                  type="text"
                  className="form-control"
                  value={this.props.value}
                  onChange={value => this.props.changeSpecifiedValue(value)}
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default InputNumberRange;