import React, { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/actions";
import { get } from 'lodash';
import Switch from "react-switch";

const AnimationSwitch = (props) => {
    const checked = useSelector(state => get(state.figuresProjects.selectedFigure,props.valueType))
    const dispatch = useDispatch();
    const changeFigureValue = useCallback((type, value) => dispatch(changeFigureValueAction(type, value)), [dispatch]);

    const handleSwitchChange = (checked) => {
        changeFigureValue(props.valueType, checked);
    }

    return (
        <div className="mt-4">
            <span className="mr-2 mt-3" >{props.header}</span>
            <Switch className="ml-2 mt-2" onChange={handleSwitchChange} checked={checked} />
        </div>
    )
}

export default AnimationSwitch;