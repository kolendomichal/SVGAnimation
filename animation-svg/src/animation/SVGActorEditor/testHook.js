import InputRange from "react-input-range";
import React, { useState } from 'react';

function testHook(props) {
    // Declare a new state variable, which we'll call "count"
    const [xPosition, setXPosition] = useState(0);
    console.log(props.selectedActor.xPosition);
    props.changeXposition(50);
    return (
        <React.Fragment>
        {props.selectedActor && (
          <React.Fragment>
            <div className="ml-2 mt-4 text-dark"> Y position </div>
            <div className="row">
              <div className="col-lg-9 mt-4 ">
                <InputRange
                  minValue={0}
                  maxValue={250}
                  value={props.selectedActor.xPosition}
                  onChange={xPosition => setXPosition(xPosition)}
                  onChangeComplete={xPosition =>
                    props.changeXposition(xPosition)
                  }
                />
              </div>
              <div className="col-lg-3 mt-3">
                {/* TODO handle onChange in input  */}
                <input
                  type="text"
                  className="form-control"
                  value={props.selectedActor.xPosition}
                  onChange={value => props.changeXposition(value)}
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

export default testHook;