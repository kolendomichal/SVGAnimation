import React, {useCallback} from "react";

import { useSelector,useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/actions";

const SelectDropdownValue = (props) => {
  const initialValue = useSelector(state => state.svgAnimation.selectedFigure[props.valueType])
  const dispatch = useDispatch();
  const changeFigureValue = useCallback((type,value) => dispatch(changeFigureValueAction(type,value)),[dispatch]);

  const renderOptions = () => {
    const options = props.dropdownOptions;
    const optionsValues = Object.keys(options);
    return Object.keys(options).map((item, key) => {
      return (
        <option key={key} value={optionsValues[key]}>
          {options[item]}
        </option>
      );
    });
  }

  const onSelectChange = (event) => {
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
