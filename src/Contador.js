import { useState } from "react";

export default function Contador({ value, classe, select, setSelect }) {
  //console.log(value, "meu valor atual");

  const [valor, setValor] = useState(1);
  //console.log(valor);

  function decrementar() {
    if (valor === 0) {
      setSelect(false);
    }
    setValor(valor - 1);
  }

  function incrementar() {
    setValor(valor + 1);
  }
  return (
    <div className={classe}>
      <button className="decrement" onClick={() => decrementar()}>
        -
      </button>{" "}
      {valor}{" "}
      <button className="increment" onClick={() => incrementar()}>
        +
      </button>
    </div>
  );
}
