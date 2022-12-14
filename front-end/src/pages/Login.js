import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../helpers/api';
import styles from '../styles/Login.module.css';

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
    <div className={ styles.loginOuter }>
      <main className={ (styles.loginMain, styles.loginWrapper) }>
        {/* <div className={ styles.loginWrapper }> */}
        <div className={ styles.logo }>
          <h1>Delivery</h1>
        </div>
        {/* <div className={styles.loginPage}> */}
        <div className={ (styles.form, styles.loginPage) }>
          <label className={ styles.labelInput } htmlFor="email-input">
            Email Address
            <input
              className={ styles.inputPage }
              type="email"
              data-testid="common_login__input-email"
              id="email-input"
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
            />
          </label>
          <label className={ styles.labelInput } htmlFor="password-input">
            Password
            <input
              className={ styles.inputPage }
              type="password"
              data-testid="common_login__input-password"
              id="password-input"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
            />
          </label>
          <button
            className={ styles.btnLogin }
            type="submit"
            data-testid="common_login__button-login"
            disabled={ !(regex.test(email) && password.length >= six) }
            onClick={ async (e) => {
              e.preventDefault();
              await validateLogin({ email, password });
            } }
          >
            Login
          </button>
        </div>
        <div className={ styles.end }>
          <span className={ styles.separator } />

          <button
            className={ styles.btn_rg }
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => navigate('/register') }
          >
            Ainda n??o tenho conta
          </button>
        </div>
        {/* </div> */}
        {/* </div> */}
      </main>
      <footer className={ styles.footer }>
        <p
          className={ styles.message }
          hidden={ hidden }
          data-testid="common_login__element-invalid-email"
        >
          {errorMessage}
        </p>
      </footer>
    </div>
  );
}

export default Login;
