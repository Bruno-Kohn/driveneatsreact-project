import Opcoes from "./Opcoes.js";

export default function Descricao(props) {
  const { title, classe, opcoes } = props;

  return (
    <>
      <div class="description">
        <h1>{title}</h1>
      </div>
      <ul class={classe}>
        <Opcoes opcoes={opcoes} />
      </ul>
    </>
  );
}
