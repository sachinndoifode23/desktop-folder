import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getUserAcc,
  increment,
  incrementByAmount,
} from "../../Slice/account/accountSlice";

function Accounts() {
  const [arg, setArg] = useState("");
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <h4>Accounts Component</h4>
      <h3>Amount : {amount}</h3>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <input
        type="text"
        name="arg"
        id="arg"
        value={arg}
        onChange={(e) => setArg(parseInt(e.target.value))}
      />
      &nbsp; &nbsp;
      <button
        onClick={() => {
          dispatch(incrementByAmount(arg));
        }}
      >
        increment By {arg}
      </button>
      <button
        onClick={() => {
          dispatch(getUserAcc(2));
        }}
      >
        initial User
      </button>
    </div>
  );
}

export default Accounts;
