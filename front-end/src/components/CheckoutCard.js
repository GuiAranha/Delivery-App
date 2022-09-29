import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
// import styles from '../styles/Cards.module.css';

function CheckoutCard(props) {
  const { name, price, quantity } = props;
  const { index } = props;

  const { cart, setCart } = useContext(AppContext);

  const removeItem = () => {
    const newCart = [...cart];
    const ind = newCart.findIndex((cartItem) => cartItem.name === name);
    newCart.splice(ind);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div>
      <div
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </div>
      <div data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {name}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {Number(price).toFixed(2).replace('.', ',')}
      </div>
      <div
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {Number(price * quantity).toFixed(2).replace('.', ',')}
      </div>
      <button
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        type="button"
        onClick={ removeItem }
      >
        Remover
      </button>
    </div>
  );
}

CheckoutCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutCard;
