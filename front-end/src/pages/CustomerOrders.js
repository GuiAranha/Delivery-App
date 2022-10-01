import React, { useEffect, useState } from 'react';
import CardOrder from '../components/CardOrder';
import NavBar from '../components/NavBar';
import { getAllSales } from '../helpers/api';
import styles from '../styles/CardsOrders.module.css';

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllSales(setOrders);
  }, []);

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
