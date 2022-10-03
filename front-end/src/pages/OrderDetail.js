import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../components/NavBar';
import OrderDetailCard from '../components/OrderDetailCard';
import { getSaleById, updateSale } from '../helpers/api';

const moment = require('moment');

function OrderDetail() {
  const { id } = useParams();
  const [saleState, setSaleState] = useState({ products: [], status: 'Pendente' });

  useEffect(() => {
    getSaleById(id).then((response) => {
      console.log(response);
      setSaleState(response);
    });
  }, []);

  const { totalPrice, saleDate, seller, products, status } = saleState;

  const date = new Date(saleDate);

  return (
    <main>
      <NavBar userRole="customer" />
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
        disabled={ status !== 'Em Trânsito' }
        onClick={ async (e) => {
          e.preventDefault();
          setSaleState({ ...saleState, status: 'Entregue' });
          localStorage.setItem(
            'sales',
            JSON.stringify({ ...saleState, status: 'Entregue' }),
          );
          await updateSale({ id, status: 'Entregue' });
          console.log(saleState.status);
        } }
      >
        Marcar como Entregue
      </button>
      {products.map((elem, index) => (
        <OrderDetailCard
          key={ index }
          index={ index }
          userRole="customer"
          { ...elem }
        />
      ))}
      <p data-testid="customer_order_details__element-order-total-price">
        {`${Number(totalPrice).toFixed(2).replace('.', ',')}`}
      </p>
    </main>
  );
}

export default OrderDetail;
