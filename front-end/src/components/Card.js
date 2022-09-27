import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Cards.module.css';

function Card(props) {
  const { name, price, url_image: urlImage, key } = props;
  return (
    <div>
      <p data-testid={ `customer_products__element-card-title-${key}` }>{name}</p>
      <p data-testid={ `customer_products__element-card-price-${key}` }>
        {price}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${key}` }
        src={ urlImage }
        alt={ name }
        className={ styles.cards }
      />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
};

export default Card;
