export default function Backdrop() {
  return (
    <div className="backdrop-background hidden">
      <div className="modal-confirm-ordering hidden">
        <div className="modal-message">
          <h1>Confirme seu pedido</h1>
        </div>
        <div className="plate-order">
          <p className="orderedPlate">Frango</p>
          <p className="orderedPlatePrice">Frango</p>
        </div>
        <div className="beverage-order">
          <p className="orderedBeverage">Frango</p>
          <p className="orderedBeveragePrice">Frango</p>
        </div>
        <div className="dessert-order">
          <p className="orderedDessert">Frango</p>
          <p className="orderedDessertPrice">Frango</p>
        </div>
        <div className="total-order">
          <p>Total</p>
          <p className="finalPriceOrdered"></p>
        </div>
        <button className="confirmation">
          <p>Tudo certo, pode pedir!</p>
        </button>
        <button className="cancelation">
          <p>Cancelar</p>
        </button>
      </div>
    </div>
  );
}
