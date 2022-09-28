import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/CardsOrders.module.css';

function CardOrder(props) {
  const { id, status, date, price } = props;
  return (
    <Link
      className={ styles.container }
      to={ `${id}` }
    >
      <section className={ styles.field }>
        <div>Pedido</div>
        <div data-testid={ `customer_orders__element-order-id-${id}` }>
          {id}
        </div>
      </section>
      <div className={ styles.date_price_field }>
        <section
          className={ styles.field }
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          {status}
        </section>
        <div className={ styles.field }>
          <section data-testid={ `customer_orders__element-order-date-${id}` }>
            {date}
          </section>
          <section data-testid={ `customer_orders__element-card-price-${id}` }>
            {price}
          </section>
        </div>
      </div>
    </Link>
  );
}

CardOrder.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CardOrder;
