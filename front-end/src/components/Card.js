import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { name, price, image, id } = props;
  return (
    <div data-testid={ `customer_products__element-card-price-${id}` }>
      <h1>Products page</h1>
      <p>{name}</p>
      <p>{price}</p>
      <p>{image}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
