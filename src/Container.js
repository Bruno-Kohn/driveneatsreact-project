import Top from './Top';
import Content from './Content';
import Bottom from './Bottom';
import { useState } from "react";

export default function Container() {
  const [pedido, setPedido] = useState([]);

  return (
    <div className="container">
      <Top />
      <Content pedido={pedido} setPeiddo={setPedido}/>
      <Bottom pedido={pedido} setPeiddo={setPedido}/>
    </div>
  );
}
