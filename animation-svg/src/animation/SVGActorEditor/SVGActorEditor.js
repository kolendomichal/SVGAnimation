import React from "react";
import "./SVGActorEditor.css";
import InputNumberRange from "./InputNumberRange";
import InputNumberRangeHook from './InputNumberRangeHook';

function SVGActorEditor(props) {
  return (
    <React.Fragment>
      {props.selectedActor && (
        <React.Fragment>
          <InputNumberRangeHook
            type="X Position"
            changeSpecifiedValue={props.changeXposition}
            selectedActor={props.selectedActor}
            value={props.selectedActor.xPosition}
          />
          <InputNumberRangeHook
            type="Y Position"
            changeSpecifiedValue={props.changeYposition}
            selectedActor={props.selectedActor}
            value={props.selectedActor.yPosition}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default SVGActorEditor;
