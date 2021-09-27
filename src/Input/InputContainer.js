import React from "react";
import "./InputContainer.css";
import PercentageButtons from "../PercentageButtons/PercentageButtons";
import BillInput from "./BillInput";
import MemberCount from "./MemberCount";

const InputContainer = (props) => {
  return (
    <div>
      <BillInput inputHandler={props.inputHandler} />
      <PercentageButtons />
      <MemberCount memberHandler={props.memberHandler} />
    </div>
  );
};

export default InputContainer;
