import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaEnvelope, FaLock, FaArrowLeft } from 'react-icons/fa';

import './styles.css';

import layerStars from '../../assets/layerStars.png';
import loboBranco from '../../assets/iconeLobo.png';

export default function Login() {
  return (
    <div className="login-container">
      <Link className="arrow" to="/">
        <FaArrowLeft size={24} color="#FFF" />
        Voltar
      </Link>

      <img src={loboBranco} alt="Icon" />

      <form>
        <div className="email_input">
          <FaEnvelope className="icon_email" />
          <input placeholder="Digite seu email" />
        </div>
        <div className="password_input">
          <FaLock className="icon_password" />
          <input type="password" placeholder="Digite sua senha" />
        </div>
        <div className="forgot">
          <Link className="back-link" to="/forgot_password">
            <p>Esqueci minha senha</p>
          </Link>
        </div>

        <button className="button" type="submit">
          Entrar
        </button>

        <div className="account">
          <text>Não tem conta?</text>
          <Link className="back-link" to="/register">
            Cadastre-se!
          </Link>
        </div>
      </form>
    </div>
  );
}
