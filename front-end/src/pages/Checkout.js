import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CheckoutCard from '../components/CheckoutCard';

function Checkout() {
  const [cartCheckout, setCartCheckout] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    setCartCheckout(cart);
  }, []);

  const sellersMock = ['andre1', 'andre2'];
  // const navigate = useNavigate();

  return (
    <main>
      <NavBar />

      <p>Estou em Checkout</p>

      <section>
        {cartCheckout.map((elem, index) => (
          <CheckoutCard
            key={ index }
            index={ index }
            update={ setCartCheckout }
            { ...elem }
          />
        ))}

        <p data-testid="customer_checkout__element-order-total-price">
          Total: R$
          {cartCheckout
            .reduce((acc, obj) => acc + obj.quantity * obj.price, 0)
            .toFixed(2)
            .replace('.', ',')}
        </p>
      </section>

      <section>
        <form>
          <select data-testid="customer_checkout__select-seller">
            {sellersMock.map((item, index) => (
              <option key={ index }>{item}</option>
            ))}
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
