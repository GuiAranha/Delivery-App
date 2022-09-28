import React from 'react';
import NavBar from '../components/NavBar';
import CheckoutCard from '../components/CheckoutCard';

function Checkout() {
  const cardsMock = [
    {
      name: 'teste',
      price: 75,
      quantity: 2,
      id: 1,
    },
    {
      name: 'aaaaaa',
      price: 30,
      quantity: 2,
      id: 2,
    },
  ];
  const sellersMock = ['andre1', 'andre2'];

  return (
    <main>
      <NavBar />
      <p>Estou em Checkout</p>
      <section>
        {cardsMock.map((elem, index) => (
          <CheckoutCard key={ index } index={ index } { ...elem } />
        ))}
        <p data-testid="customer_checkout__element-order-total-price">
          Total: R$
          {cardsMock.reduce((acc, obj) => acc + (obj.quantity * obj.price), 0)}
        </p>
      </section>

      <section>
        <form>
          <select data-testid="customer_checkout__select-seller">
            {sellersMock.map((item, index) => <option key={ index }>{item}</option>)}
          </select>
          <label htmlFor="address">
            Endereço
            <input
              data-testid="customer_checkout__input-address"
              id="addres"
              type="text"
            />
          </label>
          <label htmlFor="addressNumber">
            Número
            <input
              data-testid="customer_checkout__input-address-number"
              id="addressNumber"
              type="text"
            />
          </label>
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
          >
            Finalizar Pedido
          </button>
        </form>
      </section>
    </main>
  );
}

export default Checkout;
