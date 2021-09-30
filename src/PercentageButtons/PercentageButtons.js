import React from "react";

const PercentageButtons = (props) => {
  return (
    <div>
      <label>Select Tip %</label>
      <div>
        <button type="button" value="5" onClick={props.buttonHandler}>
          {5}%
        </button>
        <button type="button" value="10" onClick={props.buttonHandler}>
          {10}%
        </button>
        <button type="button" value="15" onClick={props.buttonHandler}>
          {15}%
        </button>
        <button type="button" value="25" onClick={props.buttonHandler}>
          {25}%
        </button>
        <button type="button" value="50" onClick={props.buttonHandler}>
          {50}%
        </button>
        <input
          onChange={props.buttonHandler}
          type="text"
          placeholder="Custom"
          style={{ textAlign: "right", width: "80px" }}
        />
      </div>
    </div>
  );
};

export default PercentageButtons;
