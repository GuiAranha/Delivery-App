import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../components/NavBar';
import OrderDetailCard from '../components/OrderDetailCard';
import { getSaleById } from '../helpers/api';

const moment = require('moment');

function OrdersDetails() {
  const { id } = useParams();
  const [saleState, setSaleState] = useState({ products: [], status: '' });

  useEffect(() => {
    const sales = localStorage.getItem('sales');
    if (!sales) {
      getSaleById(id, setSaleState);
    } else {
      setSaleState(JSON.parse(sales));
    }
  }, []);

  const { totalPrice, saleDate, status, products } = saleState;

  const lengthIdSale = 4;

  const emTransito = 'Em Trânsito';
  const pendente = 'Pendente';
  const entregue = 'Entregue';
  const preparando = 'Preparando';

  return (
    <main>
      <NavBar userRole="seller" />
      <p>Estou em OrderDetails de pessoa vendedora</p>
      <div data-testid="seller_order_details__element-order-details-label-order-id">
        PEDIDO:
        {' '}
        {`${id.padStart(lengthIdSale, '0')}`}
      </div>

      <div data-testid="seller_order_details__element-order-details-label-order-date">
        {`${moment(saleDate).format('DD/MM/YYYY')}`}
      </div>

      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {`${status}`}
      </div>

      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        disabled={
          status === preparando
          || status === emTransito
          || status === entregue
        }
        onClick={ (e) => {
          e.preventDefault();
          setSaleState({ ...saleState, status: preparando });
          localStorage.setItem(
            'sales',
            JSON.stringify({ ...saleState, status: preparando }),
          );
        } }
      >
        PREPARAR PEDIDO
      </button>

      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={
          status === pendente
          || status === emTransito
          || status === entregue
        }
        onClick={ (e) => {
          e.preventDefault();
          setSaleState({ ...saleState, status: emTransito });
          localStorage.setItem(
            'sales',
            JSON.stringify({ ...saleState, status: emTransito }),
          );
        } }
      >
        SAIU PARA ENTREGA
      </button>

      {products.map((elem, index) => (
        <OrderDetailCard
          key={ index }
          index={ index }
          userRole="seller"
          { ...elem }
        />
      ))}

      <p data-testid="seller_order_details__element-order-total-price">
        {`${Number(totalPrice).toFixed(2).replace('.', ',')}`}
      </p>
    </main>
  );
}

export default OrdersDetails;
