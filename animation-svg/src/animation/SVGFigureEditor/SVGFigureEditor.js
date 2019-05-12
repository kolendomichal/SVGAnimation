import React from "react";
import "./SVGFigureEditor.css";
import ActorName from "./ActorName/ActorName";
import SelectFigureType from "./SelectFigureType/SelectFigureType";
import SelectAnimationType from "./SelectAnimationType/SelectAnimationType";
import InputNumberRangeHook from './InputNumberRange/InputNumberRangeHook';
import SelectNumberOfSides from './SelectNumberOfSides/SelectNumberOfSides';
import FigureTypes from '../static/FigureTypes';
import ColorPicker from "./ColorPicker/ColorPicker";

function SVGFigureEditor(props) {

  const selectNumberOfSides = props.selectedFigure && props.selectedFigure.figureType === FigureTypes.POLYGON;
  const headerForFigure = props.selectedFigure && props.selectedFigure.figureType === FigureTypes.CIRCLE;
  return (
    <React.Fragment>
      {props.selectedFigure && (
        <React.Fragment>
          <ActorName
            valueType="name"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.name}
          />
          <SelectFigureType
            header={"Figure Type"}
            valueType="figureType"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.figureType}
          />
          <InputNumberRangeHook
            header={headerForFigure ? props.selectedFigure.figureType + " Diameter" : props.selectedFigure.figureType + " Size"}
            valueType="size"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.size}
            minValue={0}
            maxValue={100}
            step={1}
          />
          <SelectAnimationType
            header={"Animation Type"}
            valueType="animationType"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.animationType}
          />
          {selectNumberOfSides &&
            <SelectNumberOfSides
              header={"Number of sides"}
              valueType="numOfSides"
              changeSpecifiedValue={props.changeFigureValue}
              value={props.selectedFigure.numOfSides}
            />}
          <InputNumberRangeHook
            header="X Position"
            valueType="xPosition"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.xPosition}
            minValue={0}
            maxValue={500}
            step={1}
          />
          <InputNumberRangeHook
            header="Y Position"
            valueType="yPosition"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.yPosition}
            minValue={0}
            maxValue={500}
            step={1}
          />
          <p className="h3 mt-5 text-dark font-weight-bold">Figure Style</p>
          <InputNumberRangeHook
            header="Opacity"
            valueType="opacity"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.opacity}
            minValue={0}
            maxValue={1}
            step={0.01}
          />
          <ColorPicker
            header="Fill"
            valueType="fill"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.fill}
          />
          <ColorPicker
            header="Stroke"
            valueType="stroke"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.stroke}
          />
          <InputNumberRangeHook
            header="Stroke Width:"
            valueType="strokeWidth"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.strokeWidth}
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
