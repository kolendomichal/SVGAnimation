import React, { useState, useEffect } from "react";

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
        <div className="ml-2 mt-4 text-dark font-weight-bold col-lg-7 p-0"> {props.header} </div>
        <div className="col-lg-4 p-0"> <input className="form-control" type="number" value={value} id="number-input" onChange={e => onSelectChange(e)}/></div>
      </div>
    );
}

export default SelectNumberOfSides;