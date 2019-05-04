import React, { useState, useEffect } from "react";
import "./input-range.css";
import InputRange from "react-input-range";

function InputNumberRangeHook(props) {
  const [value, setValue] = useState(props.value);
  const [minValue, maxValue] = [0, 250];

  function changeTextInputValue(e) {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setValue(value);
    props.changeSpecifiedValue(props.valueType, value);
  }

  useEffect(() => {
    setValue(props.value);
  }, [props.value]); // Only re-run the effect if props.value changes

  return (
    <div className="form-group">
      <div className="ml-2 mt-4 text-dark font-weight-bold"> {props.header}</div>
      <div className="row">
        <div className="col-lg-9 mt-4 ">
          <InputRange
            minValue={minValue}
            maxValue={maxValue}
            value={value}
            onChange={value => setValue(value)}
            onChangeComplete={a => props.changeSpecifiedValue(props.valueType,a)}
          />
        </div>
        <div className="col-lg-3 mt-3">
          <input
            type="number"
            min={minValue}
            max={maxValue}
            className="form-control"
            value={props.value}
            onChange={e => changeTextInputValue(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default InputNumberRangeHook;
