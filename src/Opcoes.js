export default function Opcoes(props) {
  const options = props.opcoes;
  return (
    <>
      {options.map((option) => (
        <li class={"description-itens " + option.classeOpcao}>
          <img
            src={"/images/" + option.classeOpcao + ".jpg"}
            alt={option.classeOpcao}
          />
          <div class="p-boxes">
            <p class="first-description">{option.opcao}</p>
            <p class="second-description">{option.descricao}</p>
            <p class="price">{option.preco}</p>
          </div>
          <ion-icon name="checkmark-circle"></ion-icon>
        </li>
      ))}
    </>
  );
}
