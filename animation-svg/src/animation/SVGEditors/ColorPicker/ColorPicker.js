import React, { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/actions";
import { TwitterPicker } from 'react-color';

const ColorPicker = (props) => {
    const selectedFigure = useSelector(state => state.figuresProjects.selectedFigure)
    const dispatch = useDispatch();
    const initialColor = selectedFigure[props.valueType];
    const changeFigureValue = useCallback((type, value) => dispatch(changeFigureValueAction(type, value)), [dispatch]);


    return (
        <React.Fragment>
            <p className="h5 mt-3 mb-2 text-dark font-weight-bold">{props.header}</p>
            <TwitterPicker
                color={initialColor}
                onChange={color => changeFigureValue(props.valueType, color)}
            />
        </React.Fragment>
    )
}
export default ColorPicker;