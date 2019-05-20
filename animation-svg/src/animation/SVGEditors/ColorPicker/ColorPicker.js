import React , { useState, useEffect } from "react";
import { TwitterPicker } from 'react-color';

function ColorPicker(props) {
    const initialValue = props.options.selectedFigure[props.valueType];
    const [color, setColor] = useState(initialValue);

    useEffect(() => {
        setColor(initialValue);
    }, [initialValue]); 


    return (
        <React.Fragment>
            <p className="h5 mt-3 mb-2 text-dark font-weight-bold">{props.header}</p>
            <TwitterPicker
                color={color}
                onChange={color => setColor(color)}
                onChangeComplete={color => props.options.changeSpecifiedValue(props.valueType, color)}
            />
        </React.Fragment>
    )
}
export default ColorPicker;