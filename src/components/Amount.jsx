import React from "react";

export default function Amount({value, label, onIncrement, onDecrement, onNext}) {
  return (
    <section>
      <h1>{label}</h1>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onNext}>neut</button>
    </section>
  );
}
