export default function Opcoes(props) {
  const options = props.opcoes;

  function toSelectOption(option, index) {
    console.log(option, "opcao");
    console.log(index, "indice");
    console.log(option.selected);
    option.selected = true;
    console.log(option.selected);
  }

  
  return (
    <>
      {options.map((option, index) => (
        <li className={(option.selected === false ? ("description-itens " + option.classeOpcao) : ("description-itens " + option.classeOpcao + " selected"))} onClick={() => toSelectOption(option,option.id)} key={index}>
          <img
            src={"/images/" + option.classeOpcao + ".jpg"}
            alt={option.classeOpcao}
          />
          <div className="p-boxes">
            <p className="first-description">{option.opcao}</p>
            <p className="second-description">{option.descricao}</p>
            <p className="price">{option.preco}</p>
          </div>
          <ion-icon name="checkmark-circle"></ion-icon>
        </li>
      ))}
    </>
  );
}

//className={"description-itens " + option.classeOpcao + " selected"}