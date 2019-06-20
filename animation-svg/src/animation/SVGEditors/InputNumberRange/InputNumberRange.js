import React, {useCallback} from "react";
import { get } from 'lodash';
import { useSelector,useDispatch } from 'react-redux'
import { changeFigureValueAction } from "../../redux/actions";
import InputRange from "react-input-range";
import "./InputNumberRange.css";

const InputNumberRange = (props) => {
  const initialValue = useSelector(state => get(state.figuresProjects.selectedFigure, props.valueType))
  const dispatch = useDispatch();
  const changeFigureValue = useCallback((type,value) => dispatch(changeFigureValueAction(type,value)),[dispatch]);
  const [minValue, maxValue] = [props.minValue, props.maxValue];
  
  const changeTextInputValue = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    changeFigureValue(props.valueType, value);
  }

  return (
    <div className="form-group">
      <div className="ml-2 mt-4 text-dark font-weight-bold"> {props.header}</div>
      <div className="row">
        <div className="col-lg-9 mt-4 ">
          <InputRange
            minValue={minValue}
            maxValue={maxValue}
            value={initialValue}
            step={props.step}
            onChange={value => changeFigureValue(props.valueType, value)}
          />
        </div>
        <div className="col-lg-3 mt-3">
          <input
            type="number"
            min={minValue}
            max={maxValue}
            step={props.step}
            className="form-control"
            value={initialValue}
            onChange={e => changeTextInputValue(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default InputNumberRange;
