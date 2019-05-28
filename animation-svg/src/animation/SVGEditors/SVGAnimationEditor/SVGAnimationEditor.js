import React from "react";
import SelectDropdownValue from "../SelectDropdownValue/SelectDropdownValue";
import InputNumberRange from '../InputNumberRange/InputNumberRange';
import AxisTypes from '../../static/AxisTypes';
import SVGDimensions from "../../static/SVGDimensions";
import AnimationSwitch from "../AnimationSwitch/AnimationSwitch";

function SVGAnimationEditor(props) {

    return (
        <div className="animation-editor">
            <AnimationSwitch
                header="Animation Enabled"
                valueType="animationEnabled"
            />
            {props.ifEnabled &&
                <React.Fragment>
                    <SelectDropdownValue
                        header="Animation Axis"
                        valueType="animation.attributeName"
                        dropdownOptions={AxisTypes}
                    />
                    <InputNumberRange
                        header="Animation Starting point"
                        valueType="animation.from"
                        minValue={0}
                        maxValue={SVGDimensions.width}
                        step={1}
                    />
                    <InputNumberRange
                        header="Animation ending point"
                        valueType="animation.to"
                        minValue={0}
                        maxValue={SVGDimensions.width}
                        step={1}
                    />
                    <InputNumberRange
                        header="Animation duration"
                        valueType="animation.dur"
                        minValue={0}
                        maxValue={20}
                        step={0.1}
                    />
                    <InputNumberRange
                        header="Circle rotation diameter"
                        valueType="animation.r"
                        minValue={0}
                        maxValue={200}
                        step={1}
                    />
                </React.Fragment>}
        </div>
    )
}

export default SVGAnimationEditor;