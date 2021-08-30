import Opcao from "./Opcao";

export default function Opcoes({ opcoes, pedido, setPedido }) {
  
  
  return (
    <>
      {opcoes.map((option, index) => (
        <Opcao opcoes={option} pedido={pedido} setPedido={setPedido}/>
      ))}
    </>
  );
}
