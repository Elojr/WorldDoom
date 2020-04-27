import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import layerStars from '../../assets/layerStars.png';
import loboBranco from '../../assets/iconeLobo.png';

export default function Login() {
  return (
    <div className="login-container">
      <Link className="arrow" to="/">
        <FiArrowLeft size={24} color="#FFF" />
        Voltar
      </Link>

      <img src={loboBranco} alt="Icon" />

      <form>
        <input placeholder="Digite seu email" />

        <input type="password" placeholder="Digite sua senha" />

        <div className="forgot">
          <Link className="back-link" to="/forgot_password">
            Esqueci minha senha
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
