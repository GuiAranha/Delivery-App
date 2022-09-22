import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import logo from '../images/deliver.png';
import { useNavigate } from 'react-router-dom';

const axios = require("axios");

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(AppContext);
  const navigate = useNavigate();

const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const six = 6;

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
        disabled={!(regex.test(email) && password.length > six)}
        onClick={async () => {
          const token = await axios.post('http://localhost:3003/login', {
              email: 'adm@deliveryapp.com',
              password: '--adm2@21!!--'
          }
          );
          console.log(token);
        }}
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
    <p data-testid="common_login__element-invalid-email">Elemento oculto(Mensagem de erro)</p>

    </main>
);
}

export default Login;