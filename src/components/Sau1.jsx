import React from "react";

export default function Sau1({
  value,
  label,
  onIncrement,
  onDecrement,
  onReset,
}) {
  return (
    <section>
      <div className="sau">
        <h1>{label}</h1>
        <div>
          {" "}
          <h1>{value}</h1>
        </div>
        <button onClick={ onIncrement}>+</button>
        <button onClick={ onDecrement}>-</button>
        <button onClick={onReset}>reset</button>
      </div>
    </section>
  );
}
