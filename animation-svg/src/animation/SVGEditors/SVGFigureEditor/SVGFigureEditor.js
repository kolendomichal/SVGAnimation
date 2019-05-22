import React from "react";
import "./SVGFigureEditor.css";
import ActorName from "../ActorName/ActorName";
import SelectDropdownValue from "../SelectDropdownValue/SelectDropdownValue";
// import SelectAnimationType from "./SelectAnimationType/SelectAnimationType";
import InputNumberRangeHook from '../InputNumberRange/InputNumberRangeHook';
import FigureTypes from '../../static/FigureTypes';
import ColorPicker from "../ColorPicker/ColorPicker";

function SVGFigureEditor(props) {

  const selectNumberOfSides = props.selectedFigure && props.selectedFigure.figureType === FigureTypes.Polygon;
  const headerForFigure = props.selectedFigure && props.selectedFigure.figureType === FigureTypes.Circle;
  const figureChange = {changeSpecifiedValue: props.changeFigureValue, selectedFigure: props.selectedFigure};
  return (
    <React.Fragment>
      {props.selectedFigure && (
        <React.Fragment>
          <ActorName
            valueType="name"
            options={figureChange}
          />
          <SelectDropdownValue
            header={"Figure Type"}
            valueType="figureType"
            dropdownOptions={FigureTypes}
            options={figureChange}
          />
          <InputNumberRangeHook
            header={headerForFigure ? props.selectedFigure.figureType + " Diameter" : props.selectedFigure.figureType + " Size"}
            valueType="size"
            options={figureChange}
            minValue={0}
            maxValue={100}
            step={1}
          />
          {selectNumberOfSides &&
             <InputNumberRangeHook
             header="Number of sides"
             valueType="numOfSides"
             options={figureChange}
             minValue={0}
             maxValue={10}
             step={1}
           />
          }
          <InputNumberRangeHook
            header="X Position"
            valueType="xPosition"
            options={figureChange}
            minValue={0}
            maxValue={500}
            step={1}
          />
          <InputNumberRangeHook
            header="Y Position"
            valueType="yPosition"
            options={figureChange}
            minValue={0}
            maxValue={500}
            step={1}
          />
          <p className="h3 mt-5 text-dark font-weight-bold">Figure Style</p>
          <InputNumberRangeHook
            header="Opacity"
            valueType="opacity"
            options={figureChange}
            minValue={0}
            maxValue={1}
            step={0.01}
          />
          <ColorPicker
            header="Fill"
            valueType="fill"
            options={figureChange}
          />
          <ColorPicker
            header="Stroke"
            valueType="stroke"
            options={figureChange}
          />
          <InputNumberRangeHook
            header="Stroke Width:"
            valueType="strokeWidth"
            options={figureChange}
            minValue={1}
            maxValue={50}
            step={1}
          />

        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default SVGFigureEditor;
