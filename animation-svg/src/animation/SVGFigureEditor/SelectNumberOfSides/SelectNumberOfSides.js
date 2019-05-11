import React, { useState, useEffect } from "react";
import './SelectNumberOfSides.css'
function SelectNumberOfSides(props) {
    const [value, changeValue] = useState(props.value);

    function onSelectChange(event) {
      let newNumberOfSides = event.target.value;
      changeValue(newNumberOfSides);
      props.changeSpecifiedValue(props.valueType, newNumberOfSides);
    }
  
    useEffect(() => {
      changeValue(props.value);
    }, [props.value]); // Only re-run the effect if props.value changes
  
    return (
      <div className="form-group">
        <span className="ml-2 mt-4 text-dark font-weight-bold  p-0"> {props.header} </span>
        <span className="p-0"> <input className="form-control w-25 number-sides" type="number" value={value} id="number-input" onChange={e => onSelectChange(e)}/></span>
      </div>
    );
}

export default SelectNumberOfSides;