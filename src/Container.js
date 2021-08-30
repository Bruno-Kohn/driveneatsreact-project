import Top from "./Top";
import Content from "./Content";
import Bottom from "./Bottom";
import { useState } from "react";

export default function Container() {
  const [pedido, setPedido] = useState([]);
  const [contentConfig, setContentConfig] = useState([
    {
      title: "Primeiro, seu prato",
      classe: "plates",
      opcoes: [
        {
          classeOpcao: "cbo",
          opcao: "CBO",
          descricao: "C de chicken, B de bacon e O de onion",
          preco: 14.90,
          selected: false,
          id: 1,
          qtd: 0,
        },
        {
          classeOpcao: "bigmac",
          opcao: "Big Mac",
          descricao: "Dois hambúrgueres, alface, blábláblá...",
          preco: 9.90,
          selected: false,
          id: 2,
          qtd: 0,
        },
        {
          classeOpcao: "mcchicken",
          opcao: "McChicken",
          descricao: "Pra quem não gosta de papelão!",
          preco: 8.90,
          selected: false,
          id: 3,
          qtd: 0,
        },
        {
          classeOpcao: "cheddar",
          opcao: "Cheddar McMelt",
          descricao: "Queijo sabor 'industrializado'!",
          preco: 9.90,
          selected: false,
          id: 4,
          qtd: 0,
        },
      ],
    },
    {
      title: "Agora, sua bebida",
      classe: "beverages",
      opcoes: [
        {
          classeOpcao: "guarana",
          opcao: "Guaraná",
          descricao: "Não contém o suco da fruta! kkkcry",
          preco: 6.90,
          selected: false,
          id: 5,
          qtd: 0,
        },
        {
          classeOpcao: "coca",
          opcao: "Coca-Cola",
          descricao: "Não! Não contém drogas!",
          preco: 7.90,
          selected: false,
          id: 6,
          qtd: 0,
        },
        {
          classeOpcao: "sprite",
          opcao: "Sprite",
          descricao: "A sua última opção!",
          preco: 5.90,
          selected: false,
          id: 7,
          qtd: 0,
        },
        {
          classeOpcao: "fanta",
          opcao: "Fanta Laranja",
          descricao: "Tem gosto de Vitamina C...",
          preco: 5.90,
          selected: false,
          id: 8,
          qtd: 0,
        },
      ],
    },
    {
      title: "Por fim, sua sobremesa",
      classe: "desserts",
      opcoes: [
        {
          classeOpcao: "torta",
          opcao: "Torta de Maçã",
          descricao: "Cuidado para não queimar a língua!",
          preco: 3.90,
          selected: false,
          id: 9,
          qtd: 0,
        },
        {
          classeOpcao: "casquinha",
          opcao: "Casquinha",
          descricao: "Pede papel, pois derrete rápido!",
          preco: 1.90,
          selected: false,
          id: 10,
          qtd: 0,
        },
        {
          classeOpcao: "mcflurry",
          opcao: "McFlurry Oreo",
          descricao: "Uma bomba calórica gelada!",
          preco: 9.90,
          selected: false,
          id: 11,
          qtd: 0,
        },
        {
          classeOpcao: "sundae",
          opcao: "Sundae",
          descricao: "O maior inimigo da sua barriga tanquinho",
          preco: 5.90,
          selected: false,
          id: 12,
          qtd: 0,
        },
      ],
    },
  ]);
  console.log(pedido);

  return (
    <div className="container">
      <Top />
      <Content
        pedido={pedido}
        setPedido={setPedido}
        contentConfig={contentConfig}
        setContentConfig={setContentConfig}
      />
      <Bottom pedido={pedido} setPedido={setPedido}/>
    </div>
  );
}
