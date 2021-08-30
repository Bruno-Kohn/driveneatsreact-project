export default function Bottom({ pedido, setPedido }) {
  console.log(pedido, "chegouuuuuuuuuuuuuuuuuu");
  let numPratos = 0;
  let numBebidas = 0;
  let numSobremesa = 0;

  const pedidoFiltrado = pedido.filter((p, i) => pedido.indexOf(p) === i);
  console.log(pedidoFiltrado, "FILTRADO");

  for(let i = 0; i < pedidoFiltrado.length; i ++) {
      if(pedidoFiltrado[i].classeOpcao === "cbo" || pedidoFiltrado[i].classeOpcao === "bigmac" ||pedidoFiltrado[i].classeOpcao === "mcchicken" ||pedidoFiltrado[i].classeOpcao === "cheddar" ) {
          numPratos++;
          console.log(numPratos);
      }
      if(pedidoFiltrado[i].classeOpcao === "coca" || pedidoFiltrado[i].classeOpcao === "fanta" ||pedidoFiltrado[i].classeOpcao === "guarana" ||pedidoFiltrado[i].classeOpcao === "sprite" ) {
        numBebidas++;
        console.log(numBebidas);
    }
    if(pedidoFiltrado[i].classeOpcao === "sundae" || pedidoFiltrado[i].classeOpcao === "casquinha" ||pedidoFiltrado[i].classeOpcao === "mcflurry" ||pedidoFiltrado[i].classeOpcao === "torta" ) {
        numSobremesa++;
        console.log(numSobremesa);
    }
  } 
  
  return (
    <div className="bottom">
      <button className={(numPratos > 0 && numBebidas > 0 && numSobremesa>0) ? "check" : ""} onClick={() => alert("Fazer a funcao")}>
        {(numPratos > 0 && numBebidas > 0 && numSobremesa>0) ? "Fechar Pedido" : "Selecione os 3 itens para fechar o pedido"}
      </button>
    </div>
  );
}

/*
(pedido.classeOpcao === "cbo" || pedido.classeOpcao === "bigmac" ||pedido.classeOpcao === "mcchicken" ||pedido.classeOpcao === "cheddar") && (pedido.classeOpcao === "guarana" ||pedido.classeOpcao === "coca" ||pedido.classeOpcao === "sprite" || pedido.classeOpcao === "fanta") && (pedido.classeOpcao === "torta" ||pedido.classeOpcao === "casquinha" ||pedido.classeOpcao === "mcflurry" ||pedido.classeOpcao === "sunday")

const checkcbo = pedido.find((p) => (p.classeOpcao = "cbo"));
  const checkbigmac = pedido.find((p) => (p.classeOpcao = "bigmac"));
  const checkmcchicken = pedido.find((p) => (p.classeOpcao = "mcchicken"));
  const checkcheddar = pedido.find((p) => (p.classeOpcao = "cheddar"));
  const checkguarana = pedido.find((p) => (p.classeOpcao = "guarana"));
  const checkcoca = pedido.find((p) => (p.classeOpcao = "coca"));
  const checksprite = pedido.find((p) => (p.classeOpcao = "sprite"));
  const checkfanta = pedido.find((p) => (p.classeOpcao = "fanta"));
  const checktorta = pedido.find((p) => (p.classeOpcao = "torta"));
  const checkcasquinha = pedido.find((p) => (p.classeOpcao = "casquinha"));
  const checkmcflurry = pedido.find((p) => (p.classeOpcao = "mcflurry"));
  //const checksundae = pedido.find((p) => (p.classeOpcao = "sundae"));

  console.log(checkcbo);
  console.log(checkbigmac);
  console.log(checkmcchicken);
  console.log(checkcheddar);
  console.log(checkguarana);
  console.log(checkcoca);
  console.log(checksprite);
  console.log(checkfanta);
  console.log(checktorta);
  console.log(checkcasquinha);
  console.log(checkmcflurry);
  //console.log(checksundae);

//   if (
//     (checkcbo.length > 0 ||
//       checkbigmac.length > 0 ||
//       checkmcchicken.length > 0 ||
//       checkcheddar.length > 0) &&
//     (checkguarana.length > 0 ||
//       checkcoca.length > 0 ||
//       checksprite.length > 0 ||
//       checkfanta.length > 0) &&
//     (checktorta.length > 0 ||
//       checkcasquinha.length > 0 ||
//       checkmcflurry.length > 0 ||
//       checksundae.length > 0)
//   ) {
//     console.log("fica verde");
//   }
*/
