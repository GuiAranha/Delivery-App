import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import CheckoutCard from '../components/CheckoutCard';
import AppContext from '../context/AppContext';
import { getAllByRole, getUserId, registerSale } from '../helpers/api';

function Checkout() {
  const { cart } = useContext(AppContext);

  const [totalCart, setTotalCart] = useState(0);
  const [allSellers, setAllSellers] = useState([]);
  const [seller, setSeller] = useState(0);
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');

  const navigate = useNavigate();

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

    const {
      email,
      token: tokenFromStorage,
    } = JSON.parse(localStorage.getItem('user'));
    setToken(tokenFromStorage);
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
            <option checked>Selecione</option>
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
              value={ deliveryAddress }
              onChange={ (e) => setDeliveryAddress(e.target.value) }
            />
          </label>
          <label htmlFor="addressNumber">
            Número
            <input
              data-testid="customer_checkout__input-address-number"
              id="addressNumber"
              type="text"
              value={ deliveryNumber }
              onChange={ (e) => setDeliveryNumber(e.target.value) }
            />
          </label>
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
            disabled={ totalCart === 0 }
            onClick={ async (e) => {
              e.preventDefault();
              const obj = {
                userId: userId.id,
                sellerId: seller,
                totalPrice: totalCart,
                deliveryAddress,
                deliveryNumber,
                status: 'Pendente',
              };
              const { data } = await registerSale(obj, token);
              const { saleId } = data;
              navigate(`/customer/orders/${saleId}`);
            } }
          >
            Finalizar Pedido
          </button>
        </form>
      </section>
    </main>
  );
}

export default Checkout;
