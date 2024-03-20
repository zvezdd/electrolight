import React from "react";
import { useState } from "react";
import "../App.css";
import Sau1 from "./Sau1";
import Sau2 from "./Sau2";
import Amount from "./Amount";
import {sau} from "../data"

export default function FeedbackSection() {
  const [sau1, setSau1] = useState(0);
  const [sau2, setSau2] = useState(0);
  const [final, setFinal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [renderComponent, setRenderComponent] = useState(false);

  function score(score1, score2) {
    return (score1 + score2) / 2;
  }

  function calculateScore() {
    setFinal(score(sau1, sau2));
  }
  

  return (
    <section>
      <Amount
        label="how many saus do you have?"
        value={amount}
        onIncrement={() => setAmount(amount + 1)}
        onDecrement={() => setAmount(amount - 1)}
        onNext={() => setRenderComponent(true)}
      />
      { renderComponent && amount === 1 && (
        <Sau1
          label={sau}
          value={sau1}
          onIncrement={() => setSau1(sau1 + 1)}
          onDecrement={() => setSau1(sau1 - 1)}
          onReset={() => setSau1(0)}
          renderComponent={renderComponent}
        />
      )}

      { renderComponent && amount === 2 && (
        <>
          <Sau1
            label={sau}
            value={sau1}
            onIncrement={() => setSau1(sau1 + 1)}
            onDecrement={() => setSau1(sau1 - 1)}
            onReset={() => setSau1(0)}
          />
          <Sau2
            label={sau}
            value={sau2}
            onIncrement={() => setSau2(sau2 + 1)}
            onDecrement={() => setSau2(sau2 - 1)}
            onReset={() => setSau2(0)}
          />
        </>
      )}


      { renderComponent && ( <button onClick={calculateScore}>whats the score?</button> )}
        { renderComponent && (<h1>{final}</h1>)}
    </section>
  );
}
