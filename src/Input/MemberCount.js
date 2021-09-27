import React from "react";
// import FaUser from "react-icons/fa";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const MemberCount = (props) => {
  return (
    <div>
      <label htmlFor="bill">
        <p>Number of People</p>
      </label>
      <TextField
        type="Number"
        onWheel={(event) => {
          event.target.blur();
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {<i className="fas fa-user"></i>}
            </InputAdornment>
          ),
          style: { textAlign: "right" },
        }}
        onChange={props.memberHandler}
        placeholder="0"
      />
    </div>
  );
};

export default MemberCount;
