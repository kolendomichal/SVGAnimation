import React, { useCallback, FunctionComponent } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/reducers/figuresProjects/actions";
import { get } from 'lodash';
import Switch from "react-switch";
import { InitialState } from "../../redux/initialState";

type Props = {
    valueType: string,
    header: string
}

const AnimationSwitch: FunctionComponent<Props> = (props) => {
    const checked: boolean = useSelector((state: InitialState) => get(state.figuresProjects.present.selectedFigure, props.valueType));
    const dispatch = useDispatch();
    const changeFigureValue = useCallback((type: string, value: boolean) => dispatch(changeFigureValueAction({ type, value })), [dispatch]);

    const handleSwitchChange = (checked: boolean): void => {
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