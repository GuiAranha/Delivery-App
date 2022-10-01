import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../components/NavBar';
import OrderDetailCard from '../components/OrderDetailCard';
import { getSaleById } from '../helpers/api';

const moment = require('moment');

function OrderDetail() {
  const { id } = useParams();
  const [saleState, setSaleState] = useState([]);

  useEffect(() => getSaleById(id, setSaleState), []);

  const data = saleState || {};

  const {
    totalPrice,
    saleDate,
    status,
    products,
    seller,
  } = data;

  const date = new Date(saleDate);

  return (
    <main>
      <NavBar />
      <p>Estou em Checkout</p>
      <section>
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          {id}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          {seller.name}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          {`${moment(date).format('DD/MM/YYYY')}`}
        </p>
        <p
          data-testid={ `customercustomer_order_details__element-order-details-
          label-delivery-status${id}` }
        >
          {status}
        </p>
        <button
          data-testid="customer_order_details__button-delivery-check"
          type="button"
        >
          Marcar como Entregue
        </button>
        {products.map((elem, index) => (
          <OrderDetailCard key={ index } index={ index } { ...elem } />
        ))}
        <p data-testid="customer_order_details__element-order-total-price">
          {`${Number(totalPrice).toFixed(2).replace('.', ',')}`}
        </p>
      </section>
    </main>
  );
}

export default OrderDetail;
