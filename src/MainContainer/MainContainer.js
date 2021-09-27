import React, { useState } from "react";
import "../MainContainer/MainContainer.css";
import AmountDisplay from "../AmountDisplay/AmountDisplay";
import PercentageButtons from "../PercentageButtons/PercentageButtons";
import BillInput from "../Input/BillInput";
import MemberCount from "../Input/MemberCount";

export default function MainContainer() {
  const [billInput, setBillInput] = useState("");
  const [memberInput, setMemberInput] = useState("");
  const [buttonValue, setButtonValue] = useState("");

  const inputEnterHandler = (e) => {
    setBillInput(e.target.value);
  };

  const memberInputHandler = (e) => {
    setMemberInput(e.target.value);
  };

  const buttonValueHandler = (e) => {
    setButtonValue(e.target.value);
  };

  const resetButtonHandler = () => {
    setButtonValue("");
    setBillInput("");
    setMemberInput("");
  };

  return (
    <div className="Main">
      <div className="Main-Container">
        <BillInput inputHandler={inputEnterHandler} />
        <PercentageButtons
          buttonHandler={buttonValueHandler}
          buttonValue={buttonValue}
        />
        <MemberCount
          memberHandler={memberInputHandler}
          memberInput={memberInput}
        />
      </div>
      <div className="right-display">
        <AmountDisplay
          billInput={billInput}
          memberInput={memberInput}
          buttonValue={parseInt(buttonValue)}
          resetHandler={resetButtonHandler}
        />
      </div>
    </div>
  );
}
