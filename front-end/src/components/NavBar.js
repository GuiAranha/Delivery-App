import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles/NavBar.module.css';

function NavBar(props) {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { userRole } = props;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      navigate('/login');
    }
    if (user) {
      setName(user.name);
    }
  }, []);

  const userLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('sales');
    localStorage.removeItem('cart');
  };
  return (
    <nav className={ styles.mainContainer }>
      <div className={ styles.leftContainer }>
        <Link
          to={ `/${userRole}/products` }
          data-testid="customer_products__element-navbar-link-products"
          className={ styles.products }
        >
          PRODUTOS
        </Link>
        <Link
          to={ `/${userRole}/orders` }
          data-testid="customer_products__element-navbar-link-orders"
          className={ styles.orders }
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div className={ styles.rigthContainer }>
        <div className={ styles.userName }>

          <div data-testid="customer_products__element-navbar-user-full-name">
            {name}
          </div>
        </div>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
          className={ styles.logout }
          onClick={ userLogout }
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  userRole: PropTypes.string.isRequired,
};

export default NavBar;
