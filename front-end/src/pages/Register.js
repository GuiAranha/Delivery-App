import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { nameRegister, setNameRegister,
    emailRegister, setEmailRegister,
    passwordRegister, setPasswordRegister } = useContext(AppContext);
  const navigate = useNavigate();

  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const six = 6;
  const twelve = 12;

  return (
    <main>
      <div className="container-title">
        <h1 className="title">Cadastro</h1>
      </div>
      <form className="container">
        <input
          className="input-register"
          type="nameRegister"
          placeholder="Seu nome"
          data-testid="common_register__input-name"
          value={nameRegister}
          onChange={({ target: { value } }) => setNameRegister(value)}
        />
        <input
          className="input-register"
          type="emailRegister"
          placeholder="seu-email@site.com.br"
          data-testid="common_register__input-email"
          value={emailRegister}
          onChange={({ target: { value } }) => setEmailRegister(value)}
        />
        <input
          className="input-register"
          type="passwordRegister"
          placeholder="**********"
          data-testid="common_register__input-password"
          value={passwordRegister}
          onChange={({ target: { value } }) => setPasswordRegister(value)}
        />
      </form>
      <div className="container-btn">
        <button
          className="btn-rg"
          type="button"
          data-testid="common_register__button-register"
          disabled={
            !(
              regex.test(emailRegister) &&
              passwordRegister.length > six &&
              nameRegister.length > twelve
            )
          }
          onClick={() => navigate("/customer/products")}
        >
          CADASTRAR
        </button>
      </div>
      <p data-testid="common_register__element-invalid_register">
        Elemento oculto(Mensagem de erro)
      </p>
    </main>
  );
};

export default Register;
