import React from "react";
import "./MainContainer.css";
import InputContainer from "../Input/InputContainer";
import AmountDisplay from "../AmountDisplay/AmountDisplay";

export default function MainContainer() {
  const inputEnterHandler = (e) => {
    console.log(e.target.value);
  };

  const memberInpuHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="Main">
      <div className="Main-Container">
        <InputContainer
          inputHandler={inputEnterHandler}
          memberHandler={memberInpuHandler}
        />
      </div>
      <div className="right-display">
        <AmountDisplay />
      </div>
    </div>
  );
}
