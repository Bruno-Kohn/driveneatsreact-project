export default function Bottom({ pedido, setPedido }) {
  console.log(pedido, "chegouuuuuuuuuuuuuuuuuu");
  let numPratos = 0;
  let numBebidas = 0;
  let numSobremesa = 0;
  let message = "";
  let totalPrice = 0;

  const pedidoFiltrado = pedido.filter((p, i) => pedido.indexOf(p) === i);
  console.log(pedidoFiltrado, "FILTRADO");

  for (let i = 0; i < pedidoFiltrado.length; i++) {
    if (
      pedidoFiltrado[i].classeOpcao === "cbo" ||
      pedidoFiltrado[i].classeOpcao === "bigmac" ||
      pedidoFiltrado[i].classeOpcao === "mcchicken" ||
      pedidoFiltrado[i].classeOpcao === "cheddar"
    ) {
      numPratos++;
      console.log(numPratos);
    }
    if (
      pedidoFiltrado[i].classeOpcao === "coca" ||
      pedidoFiltrado[i].classeOpcao === "fanta" ||
      pedidoFiltrado[i].classeOpcao === "guarana" ||
      pedidoFiltrado[i].classeOpcao === "sprite"
    ) {
      numBebidas++;
      console.log(numBebidas);
    }
    if (
      pedidoFiltrado[i].classeOpcao === "sundae" ||
      pedidoFiltrado[i].classeOpcao === "casquinha" ||
      pedidoFiltrado[i].classeOpcao === "mcflurry" ||
      pedidoFiltrado[i].classeOpcao === "torta"
    ) {
      numSobremesa++;
      console.log(numSobremesa);
    }
  }

  function sendMessage() {
    for (let i = 0; i < pedidoFiltrado.length; i++) {
      if (
        pedidoFiltrado[i].classeOpcao === "cbo" ||
        pedidoFiltrado[i].classeOpcao === "bigmac" ||
        pedidoFiltrado[i].classeOpcao === "mcchicken" ||
        (pedidoFiltrado[i].classeOpcao === "cheddar" &&
          pedidoFiltrado[i].qtd > 0)
      ) {
        message += `Prato: ${pedidoFiltrado[i].opcao} (${pedidoFiltrado[i].qtd}x)\n`;
        totalPrice += pedidoFiltrado[i].preco * pedidoFiltrado[i].qtd;
      }
      if (
        pedidoFiltrado[i].classeOpcao === "coca" ||
        pedidoFiltrado[i].classeOpcao === "fanta" ||
        pedidoFiltrado[i].classeOpcao === "guarana" ||
        (pedidoFiltrado[i].classeOpcao === "sprite" &&
          pedidoFiltrado[i].qtd > 0)
      ) {
        message += `Bebida: ${pedidoFiltrado[i].opcao} (${pedidoFiltrado[i].qtd}x)\n`;
        totalPrice += pedidoFiltrado[i].preco * pedidoFiltrado[i].qtd;
      }
      if (
        pedidoFiltrado[i].classeOpcao === "sundae" ||
        pedidoFiltrado[i].classeOpcao === "casquinha" ||
        pedidoFiltrado[i].classeOpcao === "mcflurry" ||
        (pedidoFiltrado[i].classeOpcao === "torta" && pedidoFiltrado[i].qtd > 0)
      ) {
        message += `Sobremesa: ${pedidoFiltrado[i].opcao} (${pedidoFiltrado[i].qtd}x)\n`;
        totalPrice += pedidoFiltrado[i].preco * pedidoFiltrado[i].qtd;
      }
      
    }
    message += `Total: R$${totalPrice.toFixed(2)}`
    console.log(message);
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/5521981037125?text=${encodedMessage}`);
  }

  return (
    <div className="bottom">
      <button
        className={
          numPratos > 0 && numBebidas > 0 && numSobremesa > 0 ? "check" : ""
        }
        onClick={
          numPratos > 0 && numBebidas > 0 && numSobremesa > 0 ? sendMessage : ""
        }
      >
        {numPratos > 0 && numBebidas > 0 && numSobremesa > 0
          ? "Fechar Pedido"
          : "Selecione os 3 itens para fechar o pedido"}
      </button>
    </div>
  );
}
