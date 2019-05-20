import React from "react";
import SelectDropdownValue from "../SelectDropdownValue/SelectDropdownValue";
import InputNumberRangeHook from '../InputNumberRange/InputNumberRangeHook';
import AxisTypes from '../../static/AxisTypes';

function SVGAnimationEditor(props) {
    
    const figureChange = {changeSpecifiedValue: props.changeFigureValue, selectedFigure: props.selectedFigure.animation};
  
    return (<React.Fragment>
        {props.selectedFigure && (
            <React.Fragment>
                <SelectDropdownValue
                    header={"Animation Axis"}
                    valueType="attributeName"
                    dropdownOptions={AxisTypes}
                    options={figureChange}
                />
                <InputNumberRangeHook
                    header={"Animation Starting point"}
                    valueType="from"
                    options={figureChange}
                    minValue={0} 
                    maxValue={props.svgDimensions[0]} 
                    step={1}

                />
                <InputNumberRangeHook
                    header={"Animation ending point"}
                    valueType="to"
                    options={figureChange}
                    minValue={0} 
                    maxValue={props.svgDimensions[0]} 
                    step={1}
                />
                <InputNumberRangeHook
                    header={"Animation duration"}
                    valueType="dur"
                    options={figureChange}   
                    minValue={0} 
                    maxValue={20} 
                    step={0.1}
                />
            </React.Fragment>
        )}
    </React.Fragment>
    )
}

export default SVGAnimationEditor;