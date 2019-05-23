import React , { useState, useEffect, useContext } from "react";
import { TwitterPicker } from 'react-color';
import SVGContext from "../../SVGContext";

function ColorPicker(props) {
    const svgContext = useContext(SVGContext);
    const initialValue = svgContext.selectedFigure[props.valueType];
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
                onChangeComplete={color => svgContext.changeFigureValue(props.valueType, color)}
            />
        </React.Fragment>
    )
}
export default ColorPicker;