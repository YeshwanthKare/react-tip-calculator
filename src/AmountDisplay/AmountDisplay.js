import React from "react";

const AmountDisplay = (props) => {
  let tipAmount =
    (props.billInput / props.memberInput) * (props.buttonValue / 100);
  console.log(
    "InputBill:",
    props.billInput,
    "memberAmount:",
    props.memberInput,
    "buttonValue:",
    props.buttonValue
  );
  let tipAmountperPerson = parseInt(tipAmount);
  console.log(tipAmountperPerson);

  let amountPerPerson = props.billInput / props.memberInput;

  return (
    <div>
      <div className="result">
        <div className="display-result">
          <div className="tip-amount">
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>
          <div className="tip-display">
            ${isNaN(tipAmountperPerson) ? "0.00" : tipAmountperPerson}
          </div>
        </div>
        <div className="display-result">
          <div className="person-amount">
            <p>Total</p>
            <p>/ person</p>
          </div>
          <div className="person-amount-display">
            ${isNaN(amountPerPerson) ? "0.00" : amountPerPerson}
            {amountPerPerson === Infinity && "0.00"}
          </div>
        </div>
        <button type="button" onClick={props.resetHandler}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default AmountDisplay;
