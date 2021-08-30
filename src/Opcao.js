import Contador from "./Contador.js";
import { useState } from "react";

export default function Opcao({ opcoes, pedido, setPedido }) {
  const [valor, setValor] = useState(opcoes.qtd);
  //const [novoestado, setNovoestado] = useState([]);
  console.log(opcoes.selected);

  // console.log(opcoes);
  //console.log(pedido, "MEU PEDIDO");

  function toSelectOption() {
    if (!opcoes.selected) {
      opcoes.selected = true;
      opcoes.qtd = valor + 1;
      setValor(valor + 1);
      //console.log(opcoes);
      //setPedido([...pedido, opcoes]); // aqui funciona, mas gera o bug. precisa filtrar tbm para nao repetir os produtos na array
      //console.log(pedido, "MEU PEDIDO");
      //setOrderI();
    }
  }

  /*function toSelectOption() {
    if (!opcoes.selected) {
      opcoes.selected = true;
      opcoes.qtd = valor + 1;
      setValor(valor + 1);
      //console.log(opcoes);
      //setPedido([...pedido, opcoes]); // aqui funciona, mas gera o bug. precisa filtrar tbm para nao repetir os produtos na array
      //console.log(pedido, "MEU PEDIDO");
      //setOrderI();
    }
  }*/

  /*function setOrderI() {
    if(pedido.length === 0) {
      setPedido([opcoes])                          
    } else {
      const order = pedido.filter((p) => p.id === opcoes.id ); 
      if (order) { 
        pedido.filter(p => p.id !== opcoes.id)
        opcoes.qtd = valor + 1;
        setValor(valor + 1);
        setPedido([...pedido, opcoes]);
      }
      setPedido([...pedido, opcoes]);
    }
  }

  function setOrderD() {
    if(pedido.length === 0) {
      setPedido([opcoes])                          
    } else {
      const order = pedido.filter((p) => p.id === opcoes.id ); 
      if (order) { 
        pedido.filter(p => p.id !== opcoes.id)
        opcoes.qtd = valor - 1;
        setValor(valor - 1);
        setPedido([...pedido, opcoes]);
      }
      setPedido([...pedido, opcoes]);
    }
  }*/

  function decrementar(e) {
    e.stopPropagation();
    if (valor > 1) {
      decrementarQtd();
    } else {
      opcoes.selected = false;
      decrementarQtd();
    }
  }

  function decrementarQtd() {
    setValor(valor - 1);
    opcoes.qtd = valor - 1;
    //setOrderD();
  }

  function incrementar(e) {
    e.stopPropagation();
    setValor(valor + 1);
    opcoes.qtd = valor + 1;
    //setNovoestado([...novoestado, opcoes]); // aqui funciona, mas gera o bug. precisa filtrar tbm para nao repetir os produtos na array
    //console.log(novoestado, "NOVO ESTADO");
    //setOrderI();
  }

  return (
    <li
      className={
        opcoes.selected === false
          ? "description-itens " + opcoes.classeOpcao
          : "description-itens " + opcoes.classeOpcao + " selected"
      }
      onClick={() => toSelectOption()}
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
        classe={opcoes.selected === false ? "hidden" : "contador"}
        incrementar={incrementar}
        decrementar={decrementar}
        valor={valor}
      />
    </li>
  );
}
