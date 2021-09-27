import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const BillInput = (props) => {
  return (
    <div>
      <label htmlFor="bill">
        <p>Bill</p>
      </label>
      <TextField
        type="Number"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          style: { textAlign: "right" },
        }}
        onChange={props.inputHandler}
        placeholder="0"
      />
    </div>
  );
};

export default BillInput;
