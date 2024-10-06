import React, { useCallback, FunctionComponent } from "react";
import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/reducers/figuresProjects/actions";
import { InitialState } from "../../redux/initialState";
import { FigureTypes } from "../../static/FigureTypes";
import AxisTypes from "../../static/AxisTypes";

type Props = {
  header: string,
  valueType: string,
  dropdownOptions: typeof AxisTypes | typeof FigureTypes
}

const SelectDropdownValue: FunctionComponent<Props> = (props) => {
  const initialValue = useSelector((state: InitialState) => get(state.figuresProjects.present.selectedFigure, props.valueType));
  const dispatch = useDispatch();
  const changeFigureValue = useCallback((type: string, value: string) => dispatch(changeFigureValueAction({ type, value })), [dispatch]);

  const renderOptions = () => {
    const options = props.dropdownOptions;
    const optionsValues = Object.keys(options);
    return Object.keys(options).map((item, key) => {
      return (
        <option key={key} value={optionsValues[key]}>
          {item}
        </option>
      );
    });
  }

  const onSelectChange = (event: any) => {
    changeFigureValue(props.valueType, event.target.value);
  }

  return (
    <div className="form-group mt-4">
      <div className="ml-2 mt-2 text-dark font-weight-bold"> {props.header}</div>
      <select
        value={initialValue}
        className="form-control mt-2"
        onChange={e => onSelectChange(e)}>
        {renderOptions()}
      </select>
    </div>
  );
}

export default SelectDropdownValue;
