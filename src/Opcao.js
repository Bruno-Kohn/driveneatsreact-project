import Contador from "./Contador.js";
import { useState } from "react";

export default function Opcao({opcoes, pedido, setPedido}) {
  const [select, setSelect] = useState(opcoes);
  const [valor, setValor] = useState(opcoes.qtd);

  console.log(opcoes);
  console.log(pedido);
  //console.log(setPedido);

  function toSelectOption() {
    if (!opcoes.selected) {
      opcoes.selected = true;
      opcoes.qtd = valor + 1;
      setValor(valor + 1);
      setSelect({ ...opcoes });
      //setPedido([...pedido, "aloha"])
    }
  }

  function decrementar(e) {
    e.stopPropagation();
    if (valor > 1) {
      decrementarQtd()
    } else {
      opcoes.selected = false;
      decrementarQtd()
    }
  }

  function decrementarQtd() {
    setValor(valor - 1);
      opcoes.qtd = valor - 1;
      setSelect({ ...opcoes });
  }

  function incrementar(e) {
    e.stopPropagation();
    setValor(valor + 1);
    opcoes.qtd = valor + 1;
    setSelect({ ...opcoes });
  }

  return (
    <li
      className={
        select.selected === false
          ? "description-itens " + opcoes.classeOpcao
          : "description-itens " + opcoes.classeOpcao + " selected"
      }
      onClick={toSelectOption}
    >
      <img
        src={"/images/" + opcoes.classeOpcao + ".jpg"}
        alt={opcoes.classeOpcao}
      />
      <div className="p-boxes">
        <p className="first-description">{opcoes.opcao}</p>
        <p className="second-description">{opcoes.descricao}</p>
        <p className="price">{opcoes.preco}</p>
      </div>
      <Contador
        classe={opcoes.selected === false ? "contador hidden" : "contador"}
        incrementar={incrementar}
        decrementar={decrementar}
        valor={valor}
      />
    </li>
  );
}
