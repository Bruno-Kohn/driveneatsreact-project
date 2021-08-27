import Descricao from "./Descricao";

export default function Content() {
  const contentConfig = [
    {
      title: "Primeiro, seu prato",
      classe: "plates",
      opcoes: [
        {
          classeOpcao: "cbo",
          opcao: "CBO",
          descricao: "C de chicken, B de bacon e O de onion",
          preco: "R$14,90",
          selected: false,
          id: 1,
        },
        {
          classeOpcao: "bigmac",
          opcao: "Big Mac",
          descricao: "Dois hambúrgueres, alface, blábláblá...",
          preco: "R$9,90",
          selected: false,
          id: 2,
        },
        {
          classeOpcao: "mcchicken",
          opcao: "McChicken",
          descricao: "Pra quem não gosta de papelão!",
          preco: "R$8,90",
          selected: false,
          id: 3,
        },
        {
          classeOpcao: "cheddar",
          opcao: "Cheddar McMelt",
          descricao: "Queijo sabor 'industrializado'!",
          preco: "R$9,90",
          selected: false,
          id: 4,
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
          preco: "R$6,90",
          selected: false,
          id: 5,
        },
        {
          classeOpcao: "coca",
          opcao: "Coca-Cola",
          descricao: "Não! Não contém drogas!",
          preco: "R$7,90",
          selected: false,
          id: 6,
        },
        {
          classeOpcao: "sprite",
          opcao: "Sprite",
          descricao: "A sua última opção!",
          preco: "R$5,90",
          selected: false,
          id: 7,
        },
        {
          classeOpcao: "fanta",
          opcao: "Fanta Laranja",
          descricao: "Tem gosto de Vitamina C...",
          preco: "R$5,90",
          selected: false,
          id: 8,
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
          preco: "R$3,90",
          selected: false,
          id: 9,
        },
        {
          classeOpcao: "casquinha",
          opcao: "Casquinha",
          descricao: "Pede papel, pois derrete rápido!",
          preco: "R$1,90",
          selected: false,
          id: 10,
        },
        {
          classeOpcao: "mcflurry",
          opcao: "McFlurry Oreo",
          descricao: "Uma bomba calórica gelada!",
          preco: "R$9,90",
          selected: false,
          id: 11,
        },
        {
          classeOpcao: "sundae",
          opcao: "Sundae",
          descricao: "O maior inimigo da sua barriga tanquinho",
          preco: "R$5,90",
          selected: false,
          id: 12,
        },
      ],
    },
  ];
  return (
    <div className="content">
      {contentConfig.map((infos,index) => (
        <Descricao
          title={infos.title}
          classe={infos.classe}
          opcoes={infos.opcoes}
          key={index}
        />
      ))}
    </div>
  );
}
