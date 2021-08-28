import Contador from "./Contador.js";
import { useState } from "react";

export default function Opcao(props) {
  const option = props.opcoes;
  const [select, setSelect] = useState(option);
  const [valor, setValor] = useState(option.qtd);

  console.log(option);

  function toSelectOption() {
    if (!option.selected) {
      option.selected = true;
      option.qtd = valor + 1;
      setValor(valor + 1);
      setSelect({ ...option });
    }
  }

  function decrementar(e) {
    e.stopPropagation();
    if (valor > 1) {
      setValor(valor - 1);
      option.qtd = valor - 1;
      setSelect({ ...option });
    } else {
      option.selected = false;
      setValor(valor - 1);
      option.qtd = valor - 1;
      setSelect({ ...option });
    }
  }

  function incrementar(e) {
    e.stopPropagation();
    setValor(valor + 1);
    option.qtd = valor + 1;
    setSelect({ ...option });
  }

  return (
    <li
      className={
        select.selected === false
          ? "description-itens " + option.classeOpcao
          : "description-itens " + option.classeOpcao + " selected"
      }
      onClick={toSelectOption}
    >
      <img
        src={"/images/" + option.classeOpcao + ".jpg"}
        alt={option.classeOpcao}
      />
      <div className="p-boxes">
        <p className="first-description">{option.opcao}</p>
        <p className="second-description">{option.descricao}</p>
        <p className="price">{option.preco}</p>
      </div>
      <Contador
        classe={option.selected === false ? "contador hidden" : "contador"}
        incrementar={incrementar}
        decrementar={decrementar}
        valor={valor}
      />
    </li>
  );
}
