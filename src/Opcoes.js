
import Opcao from "./Opcao";

export default function Opcoes(props) {
  const options = props.opcoes;
  return (
    <>
      {options.map((option, index) => (
        <Opcao opcoes={option}/>
      ))}
    </>
  );
}
