import React, { useState, useEffect, useContext } from "react";
import { get } from 'lodash';
import SVGContext from "../../SVGContext";
import Switch from "react-switch";

function AnimationSwitch(props) {
    const svgContext = useContext(SVGContext);
    const initialValue = get(svgContext.selectedFigure, props.valueType);
    const [value, setValue] = useState(initialValue);

    function handleSwitchChange(checked) {
        // let checked = e.target.checked;
        svgContext.changeFigureValue(props.valueType, checked);
        setValue(checked);
    }

    useEffect(() => {
        setValue(value);
    }, [value])

    function renderShit() {
        console.log("Rerender animation switch z checkbox = ", value)
    }
    return (
        <React.Fragment>
            {renderShit()}
            <div className="mt-4">
                <span className="mr-2 mt-3" >{props.header}</span>
                <Switch className="ml-2 mt-2" onChange={handleSwitchChange} checked={value} />
            </div>
        </React.Fragment>
    )
}

export default AnimationSwitch;