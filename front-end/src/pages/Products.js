import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { getAllProducts } from '../helpers/api';

function Products() {
  const [cards, setCards] = useState([]);

  useEffect(() => getAllProducts(setCards), []);

  return (
    <main>
      <NavBar />
      <section>
        {cards.map((elem, index) => (
          <Card key={ index } { ...elem } />
        ))}
      </section>
    </main>
  );
}

export default Products;
