import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <nav className={ styles.mainContainer }>
      <div className={ styles.leftContainer }>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
          className={ styles.products }
        >
          PRODUTOS
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
          className={ styles.orders }
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div className={ styles.rigthContainer }>
        <div
          data-testid="customer_products__element-navbar-user-full-name"
          className={ styles.userName }
        >
          <div>Nome</div>
        </div>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          className={ styles.logout }
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
