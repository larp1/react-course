import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";
import { FcRefresh } from "react-icons/fc";
export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        <FcPlus />
        Sumar
      </button>

      <button
        onClick={() => {
          counter > 1 ? setCounter(counter - 1) : setCounter(0);
        }}
      >
        <FcMinus />
        Restar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        <FcRefresh />
        Reestablecer
      </button>
    </>
  );
}
