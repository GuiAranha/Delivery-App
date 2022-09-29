import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
// import styles from '../styles/Cards.module.css';

function CheckoutCard(props) {
  const { name, price, quantity, update } = props;
  const { index } = props;

  const { cart, setCart } = useContext(AppContext);

  const removeItem = () => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    update(newCart);
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
  update: PropTypes.func.isRequired,
};

export default CheckoutCard;
