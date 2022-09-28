import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../helpers/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hidden, setHidden] = useState(true);

  const navigate = useNavigate();

  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const six = 6;
  const twelve = 12;

  const register = async (user) => {
    const responseRegister = await registerUser(user);
    if ('message' in responseRegister) {
      setErrorMessage(responseRegister.message);
      setHidden(false);
      return null;
    }
    const responseLogin = await loginUser(user);
    setHidden(true);
    const dataUser = {
      name: responseLogin.data.name,
      email: responseLogin.data.email,
      role: responseLogin.data.role,
      token: responseLogin.data.token,
    };
    localStorage.setItem('user', JSON.stringify(dataUser));
    navigate('/customer/products');
  };

  return (
    <main>
      <div className="container-title">
        <h1 className="title">Cadastro</h1>
      </div>
      <form className="container">
        <input
          className="input-register"
          type="text"
          placeholder="Seu nome"
          data-testid="common_register__input-name"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
        <input
          className="input-register"
          type="text"
          placeholder="seu-email@site.com.br"
          data-testid="common_register__input-email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        <input
          className="input-register"
          type="password"
          placeholder="**********"
          data-testid="common_register__input-password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
      </form>
      <div className="container-btn">
        <button
          className="btn-rg"
          type="submit"
          data-testid="common_register__button-register"
          disabled={
            !(
              regex.test(email)
              && password.length >= six
              && name.length >= twelve)
          }
          onClick={ async (e) => {
            e.preventDefault();
            await register({ name, email, password });
          } }
        >
          CADASTRAR
        </button>
      </div>
      <p hidden={ hidden } data-testid="common_register__element-invalid_register">
        {errorMessage}
      </p>
    </main>
  );
}

export default Register;
