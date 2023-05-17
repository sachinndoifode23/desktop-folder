import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../Slice/bonus/bonusSlice";

function Bonus() {
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h4>Bonus Component</h4>
      <h3>Bonus : {points}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
}

export default Bonus;
