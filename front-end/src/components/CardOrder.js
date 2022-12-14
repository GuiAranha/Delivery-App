import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/CardsOrders.module.css';

const moment = require('moment');

function CardOrder(props) {
  const { id, status, saleDate, totalPrice, userRole } = props;

  const date = new Date(saleDate);

  return (
    <Link className={ styles.container } to={ `${id}` }>
      <section className={ styles.field }>
        <div>Pedido</div>
        <div data-testid={ `${userRole}_orders__element-order-id-${id}` }>{id}</div>
      </section>

      <div className={ styles.date_price_field }>
        <section className={ styles.field }>
          <span>{'Status: '}</span>
          <span data-testid={ `${userRole}_orders__element-delivery-status-${id}` }>
            {`${status}`}
          </span>
        </section>

        <div className={ styles.field }>
          <section>
            <span>{'Data: '}</span>
            <span data-testid={ `${userRole}_orders__element-order-date-${id}` }>
              {`${moment(date).format('DD/MM/YYYY')}`}
            </span>
          </section>

          <section>
            <span>{'Valor: '}</span>
            <span data-testid={ `${userRole}_orders__element-card-price-${id}` }>
              {`${Number(totalPrice).toFixed(2).replace('.', ',')}`}
            </span>
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
  userRole: PropTypes.string.isRequired,
};

export default CardOrder;
