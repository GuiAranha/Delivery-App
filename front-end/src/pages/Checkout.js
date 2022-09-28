import React from 'react';
import NavBar from '../components/NavBar';
import CheckoutCard from '../components/CheckoutCard';

function Checkout() {
  const cardsMock = [
    {
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
    },
  ];

  return (
    <main>
      <NavBar />
      <p>Estou em Checkout</p>
      <section>
        {cardsMock.map((elem, index) => (
          <CheckoutCard key={ index } index={ index } { ...elem } />
        ))}
      </section>
    </main>
  );
}

export default Checkout;
