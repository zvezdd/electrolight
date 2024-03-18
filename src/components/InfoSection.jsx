import React, { useState } from "react";
import { differences } from "../data";
import Button from "./Button/Button";

export default function InfoSection() {
  const [contentType, setContentType] = useState(null);

  const handleClick = (type) => {
    setContentType(type);
  };
  return (
    <section >
      <h3>Чем мы отличаемся от других?</h3>
      {/*здесь мы указываем в параметрах какое значение будет у кнопки, дальше в верхней функции мы этот параметр вывели(параметр это type) */}
      <div className="box">
        {/* {" "} */}
        <Button
          isActive={contentType === "way"}
          onClick={() => handleClick("way")}
        >
          Подход
        </Button>
        <Button
          isActive={contentType === "easy"}
          onClick={() => handleClick("easy")}
        >
          Доступность
        </Button>
        <Button
          isActive={contentType === "program"}
          onClick={() => handleClick("program")}
        >
          Концентрация
        </Button>
      </div>

      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
