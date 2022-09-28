import React from 'react';
import NavBar from '../components/NavBar';
import OrderDetailCard from '../components/OrderDetailCard';

function OrderDetail() {
  const orderMock = {
    id: 1,
    seller: 'nome do vendedor',
    data: '01/01/2022',
    status: 'entregue',
    itens: [{
      name: 'teste',
      price: 75,
      quantity: 2,
      id: 1,
    },
    {
      name: 'aaaaaa',
      price: 30,
      quantity: 2,
      id: 2,
    }],
  };

  return (
    <main>
      <NavBar />
      <p>Estou em Checkout</p>
      <section>
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          {orderMock.id}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          {orderMock.seller}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          {orderMock.data}
        </p>
        <p data-testid="customer_order_details__button-delivery-check">
          {orderMock.status}
        </p>
        {orderMock.itens.map((elem, index) => (
          <OrderDetailCard key={ index } index={ index } { ...elem } />
        ))}
        <p data-testid="customer_order_details__element-order-total-price">
          Total: R$
          {orderMock.itens.reduce((acc, obj) => acc + (obj.quantity * obj.price), 0)}
        </p>
      </section>
    </main>
  );
}

export default OrderDetail;
