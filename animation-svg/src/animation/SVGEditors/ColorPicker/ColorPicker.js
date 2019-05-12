import React , { useState, useEffect } from "react";
import { TwitterPicker } from 'react-color';

function ColorPicker(props) {
    const [color, setColor] = useState(props.value);

    useEffect(() => {
        setColor(props.value);
    }, [props.value]); 


    return (
        <React.Fragment>
            <p className="h5 mt-3 mb-2 text-dark font-weight-bold">{props.header}</p>
            <TwitterPicker
                color={color}
                onChange={color => setColor(color)}
                onChangeComplete={color => props.changeSpecifiedValue(props.valueType, color)}
            />
        </React.Fragment>
    )
}
export default ColorPicker;