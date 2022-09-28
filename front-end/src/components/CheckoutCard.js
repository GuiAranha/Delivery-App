import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/Cards.module.css';

function CheckoutCard(props) {
  const { name, price, quantity } = props;
  const { index } = props;
  return (
    <div>
      <p
        data-testid={ `customer_checkout__element-order-table-item-number-
        ${(index + 1)}` }
      >
        {(index + 1)}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-name-${(index + 1)}` }>
        {name}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-quantity-${(index + 1)}` }>
        {quantity}
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-unit-price-${(index + 1)}` }
      >
        {price}
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-sub-total-${(index + 1)}` }
      >
        {(price * quantity)}
      </p>
      <button
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        type="button"
      >
        Remover
      </button>
    </div>
  );
}

CheckoutCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default CheckoutCard;