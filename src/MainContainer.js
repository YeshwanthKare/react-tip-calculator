import React from "react";
import "./MainContainer.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function MainContainer() {
  const inputEnterHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="Main">
      <div className="Main-Container">
        <form>
          <label htmlFor="bill">
            <p>Bill</p>
          </label>
          <TextField
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            onChange={inputEnterHandler}
          />
        </form>
      </div>
    </div>
  );
}
