import React from "react";
import "./SVGFigureEditor.css";
import ActorName from "../NameChange/ActorName";
import SelectDropdownValue from "../SelectDropdownValue/SelectDropdownValue";
import InputNumberRange from '../InputNumberRange/InputNumberRange';
import FigureTypes from '../../static/FigureTypes';
import ColorPicker from "../ColorPicker/ColorPicker";
import ProjectName from "../NameChange/ProjectName";
import { connect } from "react-redux";

class SVGFigureEditor extends React.PureComponent {

  render() {
    console.log("SVGFigureEditor render")
    const selectedFigure = this.props;
    return (
      <div className="figure-editor">
        {selectedFigure &&
          <React.Fragment>
            <ProjectName />
            <ActorName
              valueType="name"
            />
            <SelectDropdownValue
              header={"Figure Type"}
              valueType="figureType"
              dropdownOptions={FigureTypes}
            />
            <InputNumberRange
              header={"Figure Size"}
              valueType="size"
              minValue={0}
              maxValue={100}
              step={1}
            />
            { selectedFigure.figureType === FigureTypes.Polygon &&
              <InputNumberRange
                header="Number of sides"
                valueType="numOfSides"
                minValue={3}
                maxValue={15}
                step={1}
              />
            }
            <InputNumberRange
              header="X Position"
              valueType="xPosition"
              minValue={0}
              maxValue={500}
              step={1}
            />
            <InputNumberRange
              header="Y Position"
              valueType="yPosition"
              minValue={0}
              maxValue={500}
              step={1}
            />
            <p className="h3 mt-5 text-dark font-weight-bold">Figure Style</p>
            <InputNumberRange
              header="Opacity"
              valueType="opacity"
              minValue={0}
              maxValue={1}
              step={0.01}
            />
            <ColorPicker
              header="Fill"
              valueType="fill"
            />
            <ColorPicker
              header="Stroke"
              valueType="stroke"
            />
            <InputNumberRange
              header="Stroke Width:"
              valueType="strokeWidth"
              minValue={1}
              maxValue={50}
              step={1}
            />
          </React.Fragment>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedFigure } = state.figuresProjects;
  return { selectedFigure }
}

export default connect(
  mapStateToProps,
  null
)(SVGFigureEditor);
