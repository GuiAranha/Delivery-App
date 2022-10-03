import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../helpers/api';
import styles from '../styles/Register.module.css';

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
    <div className={ styles.registerOuter }>
      <main className={ styles.registerMain }>
        {/* <div className={styles.registerWrapper}> */}
        <div className={ styles.logo }>
          <h1 className="title">Cadastro</h1>
        </div>
        <form className={ (styles.form, styles.registerWrapper) }>
          <label className={ styles.labelInput } htmlFor="input-name">
            Nome
            <input
              className={ styles.inputPage }
              type="text"
              data-testid="common_register__input-name"
              id="input-name"
              value={ name }
              onChange={ ({ target: { value } }) => setName(value) }
            />
          </label>

          <label className={ styles.labelInput } htmlFor="input-email">
            Email
            <input
              className={ styles.inputPage }
              type="text"
              data-testid="common_register__input-email"
              id="input-email"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
            />
          </label>
          <label className={ styles.labelInput } htmlFor="input-password">
            Senha
            <input
              className={ styles.inputPage }
              type="password"
              data-testid="common_register__input-password"
              id="input-password"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
            />
          </label>
          <button
            className={ styles.btnRegister }
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
            Registrar
          </button>
        </form>
        {/* </div> */}
      </main>
      <footer className={ styles.footer }>
        <p
          className={ styles.message }
          hidden={ hidden }
          data-testid="common_register__element-invalid_register"
        >
          {errorMessage}
        </p>
      </footer>
    </div>
  );
}

export default Register;
