import React from "react";
import WayToTeach from "./WayToTeach";
import { ways } from "../data";

export default function TeachingSection() {
  return (
    <section>
      <h3>Our way to teach</h3>

      <ul>
        {/* оператор spread  который полностью развертывает массив по индексу выводит все его элементы а именно title and description*/}
        {ways.map((way) => {
          return <WayToTeach key={way.title} {...way} />;
        })}
      </ul>
    </section>
  );
}
