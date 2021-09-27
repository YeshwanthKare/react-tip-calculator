import React from "react";

const AmountDisplay = () => {
  return (
    <div>
      <div className="result">
        <div className="display-result">
          <div className="tip-amount">
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>
          <div className="tip-display">$0.00</div>
        </div>
        <div className="display-result">
          <div className="person-amount">
            <p>Total</p>
            <p>/ person</p>
          </div>
          <div className="person-amount-display">$0.00</div>
        </div>
        <button type="button">RESET</button>
      </div>
    </div>
  );
};

export default AmountDisplay;
