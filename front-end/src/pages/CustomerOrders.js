import React from 'react';
import CardOrder from '../components/CardOrder';
import NavBar from '../components/NavBar';
import styles from '../styles/CardsOrders.module.css';

function Order() {
  const orders = [
    {
      id: '1',
      status: 'pendente',
      date: '08/04/21',
      price: '23,80',
    },
    {
      id: '2',
      status: 'preparando',
      date: '08/04/21',
      price: '14,20',
    },
    {
      id: '3',
      status: 'entregue',
      date: '07/04/21',
      price: '28,46',
    },
  ];
  return (
    <main>
      <NavBar />
      <p>Estou em customer/orders</p>
      <div className={ styles.cards_section }>
        {orders.map((elem, index) => <CardOrder key={ index } { ...elem } />)}
      </div>
    </main>
  );
}

export default Order;
