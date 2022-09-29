import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function Quantity(productInfos) {
  const { cart, setCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(0);
  const { product } = productInfos;

  useEffect(() => {
    const index = cart.findIndex((cartItem) => cartItem.id === product.id);
    const numb = -1;

    if (index === numb && quantity > 0) {
      setCart([...cart, { ...product, quantity }]);
    }
    if (index !== numb) {
      cart[index].quantity = quantity;
      const newCart = [...cart];
      setCart(newCart);
    }
  }, [quantity]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleDecrement = () => (
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0));
  const handleIncrement = () => setQuantity(quantity + 1);
  const setValue = ({ target: { value } }) => {
    setQuantity(Number(value));
    console.log(Number(value));
  };
  return (
    <div>
      <button
        className="cart-btn"
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        onClick={ handleDecrement }
      >
        -
      </button>
      <input
        className="quantity"
        type="number"
        min={ 0 }
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value={ quantity }
        onChange={ setValue }
      />
      <button
        className="cart-btn"
        type="button"
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        onClick={ handleIncrement }
      >
        +
      </button>
    </div>
  );
}
Quantity.propTypes = {
  productInfos: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
  }),
}.isRequired;
export default Quantity;
