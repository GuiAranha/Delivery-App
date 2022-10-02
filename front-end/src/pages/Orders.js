import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardOrder from '../components/CardOrder';
import NavBar from '../components/NavBar';
import { getSaleByEmail } from '../helpers/api';
import styles from '../styles/CardsOrders.module.css';

function Orders(props) {
  const [orders, setOrders] = useState([]);

  const { userRole } = props;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { email } = user;

    getSaleByEmail(setOrders, { email });
  }, []);

  return (
    <main>
      <NavBar userRole={ userRole } />
      <p>{`Estou em ${userRole}/orders`}</p>
      <div className={ styles.cards_section }>
        {orders.map((elem, index) => (
          <CardOrder key={ index } userRole={ userRole } { ...elem } />
        ))}
      </div>
    </main>
  );
}

Orders.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default Orders;
