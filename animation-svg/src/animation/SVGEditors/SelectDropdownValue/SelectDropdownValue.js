import React, { useState, useEffect, useContext} from "react";
import SVGContext from "../../SVGContext";

function SelectDropdownValue(props) {
  const svgContext = useContext(SVGContext);

  const initialValue = svgContext.selectedFigure[props.valueType];
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
    svgContext.changeFigureValue(props.valueType, newSelectedOption);
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
