import React, { FunctionComponent, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/reducers/figuresProjects/actions";
import { TwitterPicker } from 'react-color';
import { InitialState, IData } from "../../redux/initialState";

type Props = {
    valueType: string,
    header: string
}

const ColorPicker: FunctionComponent<Props> = (props) => {
    const selectedFigure: IData = useSelector((state: InitialState) => state.figuresProjects.present.selectedFigure)
    const dispatch = useDispatch();
    const initialColor = selectedFigure[props.valueType];

    const changeFigureValue = useCallback((type, value) => dispatch(changeFigureValueAction({ type, value })), [dispatch]);


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