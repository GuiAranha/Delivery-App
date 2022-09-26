import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { getAllProducts } from '../helpers/api';

function Products() {
  const [cards, setCards] = useState([]);

  useEffect(
    () => getAllProducts(setCards),
    [cards],
  );

  return (
    <main>
      <nav>
        <ul>
          <li data-testid="customer_products__element-navbar-link-products">
            Produtos
          </li>
          <li data-testid="customer_products__element-navbar-link-orders">
            Meus pedidos
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            Cicrano da Silva
          </li>
          <li data-testid="customer_products__element-navbar-link-logout">
            Sair
          </li>
        </ul>
      </nav>

      <section>
        {cards.map((elem, index) => (
          <Card key={ index } { ...elem } />
        ))}
      </section>
    </main>
  );
}

export default Products;
