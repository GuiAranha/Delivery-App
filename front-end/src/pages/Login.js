import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/deliver.png';
import { loginUser } from '../helpers/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      const { role } = JSON.parse(user);
      if (role === 'customer') {
        navigate('/customer/products');
      }

      if (role === 'seller') {
        navigate('/seller/orders');
      }
    }
  }, []);

  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const six = 6;

  const validateLogin = async (user) => {
    const response = await loginUser(user);

    if ('message' in response) {
      setErrorMessage(response.message);
      setHidden(false);
      return null;
    }
    setHidden(true);
    const dataUser = {
      name: response.data.name,
      email: response.data.email,
      role: response.data.role,
      token: response.data.token,
    };
    localStorage.setItem('user', JSON.stringify(dataUser));

    const { role } = dataUser;

    if (role === 'customer') {
      navigate('/customer/products');
    }

    if (role === 'seller') {
      navigate('/seller/orders');
    }
  };

  return (
    <main>
      <div className="container-logo">
        <img className="logo" src={ logo } alt="logo" />
        <h1 className="title">Delivery</h1>
      </div>
      <form className="container">
        <input
          className="input-login"
          type="email"
          placeholder="Email"
          data-testid="common_login__input-email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          className="input-login"
          type="password"
          placeholder="Password"
          data-testid="common_login__input-password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
      </form>
      <div className="container-btn">
        <button
          className="btn-lg"
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !(regex.test(email) && password.length >= six) }
          onClick={ async (e) => {
            e.preventDefault();
            await validateLogin({ email, password });
          } }
        >
          LOGIN
        </button>
        <button
          className="btn-rg"
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
        >
          REGISTRAR
        </button>
      </div>
      <p
        hidden={ hidden }
        data-testid="common_login__element-invalid-email"
      >
        {errorMessage}
      </p>
    </main>
  );
}

export default Login;
