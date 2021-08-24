export default function Backdrop () {
    return (
        <div class="backdrop-background hidden">
        <div class="modal-confirm-ordering hidden">
          <div class="modal-message">
            <h1>Confirme seu pedido</h1>
          </div>
          <div class="plate-order">
            <p class="orderedPlate">Frango</p>
            <p class="orderedPlatePrice">Frango</p>
          </div>
          <div class="beverage-order">
            <p class="orderedBeverage">Frango</p>
            <p class="orderedBeveragePrice">Frango</p>
          </div>
          <div class="dessert-order">
            <p class="orderedDessert">Frango</p>
            <p class="orderedDessertPrice">Frango</p>
          </div>
          <div class="total-order">
            <p>Total</p>
            <p class="finalPriceOrdered"></p>
          </div>
          <button onclick="sendMessage()" class="confirmation">
            <p>Tudo certo, pode pedir!</p>
          </button>
          <button onclick="backToOrder()" class="cancelation">
            <p>Cancelar</p>
          </button>
        </div>
      </div>
    );
}