import Opcoes from "./Opcoes.js";

export default function Descricao(props) {
  const { title, classe, opcoes } = props;

  return (
    <>
      <div className="description">
        <h1>{title}</h1>
      </div>
      <ul className={classe}>
        <Opcoes opcoes={opcoes} />
      </ul>
    </>
  );
}
