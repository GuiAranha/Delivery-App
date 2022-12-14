import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../styles/Cards.module.css';

function OrderDetailCard(props) {
  const { name, price, quantity, index, userRole } = props;
  return (
    <div>
      <p
        data-testid={ `${userRole}_order_details__element-order-table-item-number-
        ${(index + 1)}` }
      >
        {(index + 1)}
      </p>
      <p
        data-testid={
          `${userRole}_order_details__element-order-table-name-${(index + 1)}`
        }
      >
        {name}
      </p>
      <p
        data-testid={ `${userRole}_order_details__element-order-table-quantity-
        ${(index + 1)}` }
      >
        {quantity}
      </p>
      <p
        data-testid={ `${userRole}_order_details__element-order-table-unit-price-
        ${(index + 1)}` }
      >
        {price}
      </p>
      <p
        data-testid={ `${userRole}_order_details__element-order-table-sub-total-
        ${(index + 1)}` }
      >
        {(price * quantity)}
      </p>
    </div>
  );
}

OrderDetailCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default OrderDetailCard;
