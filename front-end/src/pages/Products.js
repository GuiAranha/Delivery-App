import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
import { getAllProducts } from '../helpers/api';
import styles from '../styles/Products.module.css';

function Products() {
  const { cart } = useContext(AppContext);
  const [allProducts, setAllProducts] = useState([]);
  const [userRole, setUserRole] = useState('');
  const [totalCart, setTotalCart] = useState(0);

  const navigate = useNavigate();

  const calculatePrice = (item) => {
    const total = item.reduce((acc, cartItem) => {
      acc += cartItem.quantity * cartItem.price;
      return acc;
    }, 0);
    return total;
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUserRole(user.role);
    getAllProducts(setAllProducts);
  }, []);

  useEffect(() => {
    const totalPrice = calculatePrice(cart);
    setTotalCart(totalPrice);
  }, [cart]);

  return (
    <main>
      <NavBar userRole={ userRole } />
      <section className={ styles.containerCards }>
        {allProducts.map((elem, index) => (
          <Card key={ index } { ...elem } />
        ))}
      </section>
      <div className={ styles.containerBtn }>
        <button
          className={ styles.totalPrice }
          type="button"
          onClick={ () => navigate('/customer/checkout') }
          data-testid="customer_products__button-cart"
          disabled={ totalCart === 0 }
        >
          <span data-testid="customer_products__checkout-bottom-value">
            Ver Carrinho: R$
            {' '}
            {`${totalCart.toFixed(2).replace('.', ',')}`}
          </span>
        </button>
      </div>
    </main>
  );
}
export default Products;
