import React from "react";
import "./SVGFigureEditor.css";
import SelectFigureType from "./SelectFigureType";
import InputNumberRangeHook from './InputNumberRangeHook';
import ActorName from "./ActorName";

function SVGFigureEditor(props) {
  return (
    <React.Fragment>
      {props.selectedFigure && (
        <React.Fragment>
          <ActorName 
            changeSpecifiedValue={props.changeFigureValue}
            value = {props.selectedFigure.name}
          />
          <SelectFigureType
            header={"Figure Type"}
            valueType="figureType"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.figureType}
          />
          <InputNumberRangeHook
            header="X Position"
            valueType="xPosition"
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.xPosition}
          />
          <InputNumberRangeHook
            header="Y Position"
            valueType="yPosition" //TODO is there better way to pass valueType?
            changeSpecifiedValue={props.changeFigureValue}
            value={props.selectedFigure.yPosition}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default SVGFigureEditor;
