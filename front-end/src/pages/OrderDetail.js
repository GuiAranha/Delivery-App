import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../components/NavBar';
import OrderDetailCard from '../components/OrderDetailCard';
import { getSaleById } from '../helpers/api';

const moment = require('moment');

function OrderDetail() {
  const { id } = useParams();
  const [saleState, setSaleState] = useState({ products: [] });

  useEffect(() => {
    getSaleById(id, setSaleState);
  }, []);

  const { totalPrice, saleDate, status, seller, products } = saleState;

  const date = new Date(saleDate);

  return (
    <main>
      <NavBar />
      <p>Estou em OrderDetails</p>
      <p data-testid="customer_order_details__element-order-details-label-order-id">
        {id}
      </p>
      <p data-testid="customer_order_details__element-order-details-label-seller-name">
        {seller}
      </p>
      <p data-testid="customer_order_details__element-order-details-label-order-date">
        {`${moment(date).format('DD/MM/YYYY')}`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </p>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled
      >
        Marcar como Entregue
      </button>
      {products.map((elem, index) => (
        <OrderDetailCard key={ index } index={ index } userRole="customer" { ...elem } />
      ))}
      <p data-testid="customer_order_details__element-order-total-price">
        {`${Number(totalPrice).toFixed(2).replace('.', ',')}`}
      </p>
    </main>
  );
}

export default OrderDetail;
