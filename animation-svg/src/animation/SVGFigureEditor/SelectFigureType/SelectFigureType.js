import React, { useState, useEffect } from "react";
import FigureTypes from "../../static/FigureTypes";

function SelectFigureType(props) {
  const [value, changeValue] = useState(props.value);

  function renderOptions() {
    return Object.keys(FigureTypes).map((item, key) => {
      return (
        <option key={key} value={FigureTypes[item]}>
          {FigureTypes[item]}
        </option>
      );
    });
  }

  function onSelectChange(event) {
    let newFigureType = event.target.value;
    changeValue(newFigureType);
    props.changeSpecifiedValue(props.valueType, newFigureType);
  }

  useEffect(() => {
    changeValue(props.value);
  }, [props.value]); // Only re-run the effect if props.value changes

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

export default SelectFigureType;
