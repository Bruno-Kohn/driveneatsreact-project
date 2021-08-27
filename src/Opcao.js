import Contador from "./Contador.js";
import { useState } from "react";

export default function Opcao(props) {
  
  const [select, setSelect] = useState(props.opcoes);
  const option = props.opcoes;
  console.log(option);
  //const index = props.opcoes.id;

  function toSelectOption() {
    option.selected = true;
    setSelect({...option});
    if(select){
        console.log(1)
    }
    //setValor(valor + 1)
  }
  return (
    <li
      className={
        select.selected === false
          ? "description-itens " + option.classeOpcao
          : "description-itens " + option.classeOpcao + " selected"
      }
      onClick={() => toSelectOption()}
      
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
        value={option.selected === true ? 1 : 0}
        select={select}
        setSelect={setSelect}
      />
    </li>
  );
}
