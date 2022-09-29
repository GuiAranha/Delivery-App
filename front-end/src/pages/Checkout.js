import React, { useEffect, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CheckoutCard from '../components/CheckoutCard';
import AppContext from '../context/AppContext';
import { getAllByRole, getUserId } from '../helpers/api';

function Checkout() {
  const { cart } = useContext(AppContext);

  const [totalCart, setTotalCart] = useState(0);
  const [allSellers, setAllSellers] = useState([]);
  const [seller, setSeller] = useState(0);
  const [, setUserId] = useState('');

  // const navigate = useNavigate();

  const calculatePrice = (item) => {
    const total = item.reduce((acc, cartItem) => {
      acc += cartItem.quantity * cartItem.price;
      return acc;
    }, 0);
    return total;
  };

  useEffect(() => {
    const totalPrice = calculatePrice(cart);
    setTotalCart(totalPrice);
  }, [cart]);

  useEffect(() => {
    getAllByRole(setAllSellers, 'seller');

    const { email } = JSON.parse(localStorage.getItem('user'));
    getUserId(setUserId, { email });
  }, []);

  return (
    <main>
      <NavBar />

      <p>Estou em Checkout</p>

      <section>
        {cart.map((elem, index) => (
          <CheckoutCard key={ index } index={ index } { ...elem } />
        ))}

        <p data-testid="customer_checkout__element-order-total-price">
          Total: R$
          {totalCart.toFixed(2).replace('.', ',')}
        </p>
      </section>

      <section>
        <form>
          <select
            data-testid="customer_checkout__select-seller"
            value={ seller }
            onChange={ (e) => setSeller(e.target.value) }
          >
            {allSellers.map((item, index) => (
              <option key={ index } value={ item.id }>
                {item.name}
              </option>
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
            disabled={ totalCart === 0 }
            // onClick={ `/customer/orders/${orderId}` }
          >
            Finalizar Pedido
          </button>
        </form>
      </section>
    </main>
  );
}

export default Checkout;
