import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import AppContext from '../context/AppContext';
import logo from '../images/deliver.png';
import { loginUser } from '../helpers/api';

// const axios = require("axios");

function Login() {
  /* const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(AppContext); */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const six = 6;

  const validateLogin = async () => {
    const user = { email, password };
    const token = await loginUser(user);
    if (token === null) {
      setHidden(false);
    }
    console.log(token);
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
          type="button"
          data-testid="common_login__button-login"
          disabled={ !(regex.test(email) && password.length > six) }
          onClick={ () => validateLogin() }
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
        Elemento oculto(Mensagem de erro)
      </p>
    </main>
  );
}

export default Login;
