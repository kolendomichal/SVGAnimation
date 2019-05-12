import React from "react";
import ActorName from "../ActorName/ActorName";
import SelectDropdownValue from "../SelectDropdownValue/SelectDropdownValue";
// import SelectAnimationType from "./SelectAnimationType/SelectAnimationType";
import InputNumberRangeHook from '../InputNumberRange/InputNumberRangeHook';
import SelectNumberOfSides from '../SelectNumberOfSides/SelectNumberOfSides';
import AxisTypes from '../../static/AxisTypes';
import ColorPicker from "../ColorPicker/ColorPicker";

function SVGAnimationEditor(props) {
    // const selectNumberOfSides = props.selectedFigure && props.selectedFigure.figureType === FigureTypes.POLYGON;
    // const headerForFigure = props.selectedFigure && props.selectedFigure.figureType === FigureTypes.CIRCLE;
    
    return (<React.Fragment>
        {props.selectedFigure && (
            <React.Fragment>
                <SelectDropdownValue
                    header={"Animation Axis"}
                    valueType="attributeName"
                    options={AxisTypes}
                    changeSpecifiedValue={props.changeFigureValue}
                    value={props.selectedFigure.animation.attributeName}
                />
                <InputNumberRangeHook
                    header={"Animation Starting point"}
                    valueType="from"
                    changeSpecifiedValue={props.changeFigureValue}
                    value={props.selectedFigure.animation.from}
                    minValue={0} //SVG size?
                    maxValue={props.svgDimensions[0]} //SVG size?
                    step={1}

                />
                <InputNumberRangeHook
                    header={"Animation ending point"}
                    valueType="to"
                    changeSpecifiedValue={props.changeFigureValue}
                    value={props.selectedFigure.animation.to}
                    minValue={0} //SVG size?
                    maxValue={props.svgDimensions[0]} //SVG size?
                    step={1}
                />
                <InputNumberRangeHook
                    header={"Animation duration"}
                    valueType="dur"
                    changeSpecifiedValue={props.changeFigureValue}
                    value={Number(props.selectedFigure.animation.dur.substring(0,props.selectedFigure.animation.dur.length-1))}
                    minValue={0} //SVG size?
                    maxValue={20} //SVG size?
                    step={0.1}
                />
            </React.Fragment>
        )}
    </React.Fragment>
    )
}

export default SVGAnimationEditor;