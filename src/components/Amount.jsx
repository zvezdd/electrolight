import React from "react";

export default function Amount({value, label, onIncrement, onDecrement, onNext}) {
  return (
    <section>
      <h1>{label}</h1>
      <h1>{value}</h1>
      <button className="btnCalc" onClick={onIncrement}>+</button>
      <button className="btnCalc" onClick={onDecrement}>-</button>
      <button className="btnCalc" onClick={onNext}>next</button>
    </section>
  );
}
