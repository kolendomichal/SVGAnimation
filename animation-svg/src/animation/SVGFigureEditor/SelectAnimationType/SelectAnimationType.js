import React, { useState, useEffect } from "react";
import AnimationTypes from "../../static/AnimationTypes";

function SelectAnimationType(props) {
  const [value, changeValue] = useState(props.value);

  function renderOptions() {
    return Object.keys(AnimationTypes).map((item, key) => {
      return (
        <option key={key} value={AnimationTypes[item]}>
          {AnimationTypes[item]}
        </option>
      );
    });
  }

  function onSelectChange(event) {
    let newAnimationType = event.target.value;
    changeValue(newAnimationType);
    props.changeSpecifiedValue(props.valueType, newAnimationType);
  }

  useEffect(() => {
    changeValue(props.value);
  }, [props.value]);

  return (
    <div className="form-group">
      <div className="ml-2 mt-4 text-dark font-weight-bold"> {props.header}</div>
      <select
        value={value}
        className="form-control mt-2"
        onChange={e => onSelectChange(e)}>
        {renderOptions()}
      </select>
    </div>
  );
}

export default SelectAnimationType;
