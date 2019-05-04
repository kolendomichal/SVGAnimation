import React from "react";
import "./SVGActorEditor.css";
import InputNumberRange from "./InputNumberRange";

function SVGActorEditor(props) {
  return (
    <React.Fragment>
      {props.selectedActor && (
        <React.Fragment>
          <InputNumberRange
            type="X Position"
            changeSpecifiedValue={props.changeXposition}
            selectedActor={props.selectedActor}
            value={props.selectedActor.xPosition}
          />
          <InputNumberRange
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
