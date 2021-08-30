import Descricao from "./Descricao";

export default function Content({pedido, setPedido, contentConfig, setContentConfig}) {
  
  return (
    <div className="content">
      {contentConfig.map((infos, index) => (
        <Descricao
          title={infos.title}
          classe={infos.classe}
          opcoes={infos.opcoes}
          key={index}
          pedido={pedido}
          setPedido={setPedido}
        />
      ))}
    </div>
  );
}
