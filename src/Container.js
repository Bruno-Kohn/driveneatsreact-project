export default function Container() {
    return(
        <div class="container">
        <div class="top">
          <h1>DrivenEats</h1>
          <p>Sua comida em 6 minutos</p>
        </div>
        <div class="content">
          <div class="description">
            <h1>Primeiro, seu prato</h1>
          </div>
          <ul class="plates">
            <li class="description-itens cbo" onclick="selectPlate(this)">
              <img src="/images/cbo.jpg" alt="cbo" />
              <div class="p-boxes">
                <p class="first-description">CBO</p>
                <p class="second-description">
                  C de chicken, B de bacon e O de onion
                </p>
                <p class="price">R$14,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectPlate(this)"
              ></ion-icon>
            </li>
            <li class="description-itens bigmac" onclick="selectPlate(this)">
              <img src="/images/bigmac.jpg" alt="bigmac" />
              <div class="p-boxes">
                <p class="first-description">Big Mac</p>
                <p class="second-description">
                  Dois hambúrgueres, alface, blábláblá...
                </p>
                <p class="price">R$9,90</p>
              </div>
              <ion-icon
                class="hidden"
                name="checkmark-circle"
                onclick="selectPlate(this)"
              ></ion-icon>
            </li>
            <li class="description-itens mcchicken" onclick="selectPlate(this)">
              <img src="/images/mcchicken.jpg" alt="mcchicken" />
              <div class="p-boxes">
                <p class="first-description">McChicken</p>
                <p class="second-description">Pra quem não gosta de papelão!</p>
                <p class="price">R$8,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectPlate(this)"
              ></ion-icon>
            </li>
            <li class="description-itens cheddar" onclick="selectPlate(this)">
              <img src="/images/cheddar.jpg" alt="cheddar" />
              <div class="p-boxes">
                <p class="first-description">Cheddar McMelt</p>
                <p class="second-description">
                  Queijo sabor 'industrializado'!
                </p>
                <p class="price">R$9,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectPlate(this)"
              ></ion-icon>
            </li>
          </ul>
          <div class="description">
            <h1>Agora, sua bebida</h1>
          </div>
          <ul class="beverages">
            <li
              class="description-itens guarana"
              onclick="selectBeverage(this)"
            >
              <img src="/images/guarana.jpg" alt="guarana" />
              <div class="p-boxes">
                <p class="first-description">Guaraná</p>
                <p class="second-description">
                  Não contém o suco da fruta! kkkcry
                </p>
                <p class="price">R$6,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectBeverage(this)"
              ></ion-icon>
            </li>
            <li class="description-itens coca" onclick="selectBeverage(this)">
              <img src="/images/coca.jpg" alt="coca" />
              <div class="p-boxes">
                <p class="first-description">Coca-Cola</p>
                <p class="second-description">Não! Não contém drogas!</p>
                <p class="price">R$7,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectBeverage(this)"
              ></ion-icon>
            </li>
            <li class="description-itens sprite" onclick="selectBeverage(this)">
              <img src="/images/sprite.jpg" alt="sprite" />
              <div class="p-boxes">
                <p class="first-description">Sprite</p>
                <p class="second-description">A sua última opção!</p>
                <p class="price">R$5,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectBeverage(this)"
              ></ion-icon>
            </li>
            <li class="description-itens fanta" onclick="selectBeverage(this)">
              <img src="/images/fanta.jpg" alt="fanta" />
              <div class="p-boxes">
                <p class="first-description">Fanta Laranja</p>
                <p class="second-description">Tem gosto de vitamina C...</p>
                <p class="price">R$5,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectBeverage(this)"
              ></ion-icon>
            </li>
          </ul>
          <div class="description">
            <h1>Por fim, sua sobremesa</h1>
          </div>
          <ul class="desserts">
            <li class="description-itens torta" onclick="selectDessert(this)">
              <img src="/images/torta.jpg" alt="torta" />
              <div class="p-boxes">
                <p class="first-description">Torta de Maçã</p>
                <p class="second-description">
                  Cuidado para não queimar a língua!
                </p>
                <p class="price">R$3,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectDessert(this)"
              ></ion-icon>
            </li>
            <li
              class="description-itens casquinha"
              onclick="selectDessert(this)"
            >
              <img src="/images/casquinha.jpg" alt="casquinha" />
              <div class="p-boxes">
                <p class="first-description">Casquinha</p>
                <p class="second-description">
                  Pede papel, pois derrete rápido!
                </p>
                <p class="price">R$1,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectDessert(this)"
              ></ion-icon>
            </li>
            <li
              class="description-itens mcflurry"
              onclick="selectDessert(this)"
            >
              <img src="/images/mcflurry.jpg" alt="mcflurry" />
              <div class="p-boxes">
                <p class="first-description">McFlurry Oreo</p>
                <p class="second-description">Uma bomba calórica gelada!</p>
                <p class="price">R$9,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectDessert(this)"
              ></ion-icon>
            </li>
            <li class="description-itens sundae" onclick="selectDessert(this)">
              <img src="/images/sundae.jpg" alt="sundae" />
              <div class="p-boxes">
                <p class="first-description">Sundae</p>
                <p class="second-description">
                  O maior inimigo da sua barriga tanquinho
                </p>
                <p class="price">R$5,90</p>
              </div>
              <ion-icon
                name="checkmark-circle"
                onclick="selectDessert(this)"
              ></ion-icon>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <button onclick="toOrderCombo()">
            Selecione os 3 itens para fechar o pedido
          </button>
        </div>
      </div>
    );
}