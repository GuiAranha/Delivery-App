import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Cards.module.css';

function Card(props) {
  const { name, price, url_image: urlImage, id } = props;
  return (
    <div>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {price}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        className={ styles.cards }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
      >
        ADICIONAR ITENS
      </button>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
      >
        REMOVER ITENS
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        placeholder="Quantity"
        type="number"
      />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url_image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
