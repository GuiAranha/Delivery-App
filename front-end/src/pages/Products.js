import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../helpers/api';

function Products() {
  const [cards, setCards] = useState([]);

  useEffect(() => async () => {
    const allCards = await getAllProducts();
    setCards(allCards);
  }, []);

  return (
    <main>
      <h1>Products page</h1>
    </main>
  );
}

export default Products;
