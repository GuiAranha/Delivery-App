import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { getAllProducts } from '../helpers/api';

function Products() {
  const { cart } = useContext(AppContext);
  const [allProducts, setAllProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const navigate = useNavigate();
  const calculatePrice = (item) => {
    const total = item.reduce((acc, cartItem) => {
      acc += cartItem.quantity * cartItem.price;
      return acc;
    }, 0);
    return total;
  };
  useEffect(() => getAllProducts(setAllProducts), []);
  useEffect(() => {
    const totalPrice = calculatePrice(cart);
    setTotalCart(totalPrice);
  }, [cart]);
  return (
    <main>
      <NavBar />
      <section>
        {allProducts.map((elem, index) => (
          <Card key={ index } { ...elem } />
        ))}
      </section>
      <div>
        <button
          type="button"
          onClick={ () => navigate('/customer/checkout') }
          data-testid="customer_products__button-cart"
          disabled={ totalCart === 0 }
        >
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            {`${totalCart
              .toFixed(2)
              .replace('.', ',')}`}

          </span>
        </button>
      </div>
    </main>
  );
}
export default Products;
/* import React, { useState, useEffect } from 'react';
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
 */
