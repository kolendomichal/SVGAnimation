import React, { useState, useEffect } from "react";
import "./InputNumberRange.css";
import InputRange from "react-input-range";

function InputNumberRangeHook(props) {
  const initialValue = props.options.selectedFigure[props.valueType];
  const [value, setValue] = useState(initialValue);
  const [minValue, maxValue] = [props.minValue, props.maxValue];

  function changeTextInputValue(e) {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setValue(value);
    props.options.changeSpecifiedValue(props.valueType, value);
  }

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]); 

  return (

    <div className="form-group">
      <div className="ml-2 mt-4 text-dark font-weight-bold"> {props.header}</div>
      <div className="row">
        <div className="col-lg-9 mt-4 ">
          <InputRange
            minValue={minValue}
            maxValue={maxValue}
            value={value}
            step={props.step}
            onChange={value => setValue(value)}
            onChangeComplete={value => props.options.changeSpecifiedValue(props.valueType, value)}
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

export default InputNumberRangeHook;
