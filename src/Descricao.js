import Opcoes from "./Opcoes.js";

export default function Descricao({ title, classe, opcoes, pedido, setPedido}) {

  return (
    <>
      <div className="description">
        <h1>{title}</h1>
      </div>
      <ul className={classe}>
        <Opcoes opcoes={opcoes} pedido={pedido} setPedido={setPedido} />
      </ul>
    </>
  );
}
