import React from "react";

const PercentageButtons = () => {
  return (
    <div>
      <label>Select Tip %</label>
      <div>
        <button type="button" value="5">
          5%
        </button>
        <button type="button" value="10">
          10%
        </button>
        <button type="button" value="15">
          15%
        </button>
        <button type="button" value="25">
          25%
        </button>
        <button type="button" value="50">
          50%
        </button>
        <button type="button">Custom</button>
      </div>
    </div>
  );
};

export default PercentageButtons;
