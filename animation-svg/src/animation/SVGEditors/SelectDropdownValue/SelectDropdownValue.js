import React, { useState, useEffect } from "react";

function SelectDropdownValue(props) {
  const initialValue = props.options.selectedFigure[props.valueType];
  const [value, changeValue] = useState(initialValue);

  function renderOptions() {
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

  function onSelectChange(event) {
    let newSelectedOption = event.target.value;
    changeValue(newSelectedOption);
    props.options.changeSpecifiedValue(props.valueType, newSelectedOption);
  }

  useEffect(() => {
    changeValue(initialValue);
  }, [initialValue]); 

  return (
    <div className="form-group">
      <div className="ml-2 mt-2 text-dark font-weight-bold"> {props.header}</div>
      <select
        value={value}
        className="form-control mt-2"
        onChange={e => onSelectChange(e)}>
        {renderOptions()}
      </select>
    </div>
  );
}

export default SelectDropdownValue;
