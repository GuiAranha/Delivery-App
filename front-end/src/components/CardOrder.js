import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/CardsOrders.module.css';

function CardOrder(props) {
  const { id, status, saleDate, totalPrice } = props;

  const date = new Date(saleDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <Link className={ styles.container } to={ `${id}` }>
      <section className={ styles.field }>
        <div>Pedido</div>
        <div data-testid={ `customer_orders__element-order-id-${id}` }>{id}</div>
      </section>
      <div className={ styles.date_price_field }>
        <section
          className={ styles.field }
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {`Status: ${status}`}
        </section>
        <div className={ styles.field }>
          <section data-testid={ `customer_orders__element-order-date-${id}` }>
            {`Data: ${day}/${month + 1}/${year}`}
          </section>
          <section data-testid={ `customer_orders__element-card-price-${id}` }>
            {`R$ ${totalPrice}`}
          </section>
        </div>
      </div>
    </Link>
  );
}

CardOrder.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default CardOrder;
