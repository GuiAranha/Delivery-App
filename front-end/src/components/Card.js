import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Cards.module.css';
import Quantity from './Quantity';

function Card(props) {
  const { name, price, url_image: urlImage, id } = props;
  const productInfos = { name, price, id };

  return (
    <div className={ styles.inner }>
      <div className={ styles.card }>
        <div>
          <span
            className={ styles.tagPrice }
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            R$
            {' '}
            {' '}
            {' '}
            {price.replace('.', ',')}
          </span>
          <div className={ styles.outerImage }>
            <img
              className={ styles.image }
              data-testid={ `customer_products__img-card-bg-image-${id}` }
              src={ urlImage }
              alt={ name }
            />
          </div>

        </div>
        <div className={ styles.cardBottom }>
          <div className={ styles.infos }>
            <p
              className={ styles.title }
              data-testid={ `customer_products__element-card-title-${id}` }
            >
              {name}
            </p>
          </div>
          <Quantity product={ productInfos } />
        </div>

      </div>
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
