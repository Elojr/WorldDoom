import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaEnvelope, FaLock, FaArrowLeft, FaUser } from 'react-icons/fa';

import './styles.css';

import layerStars from '../../assets/layerStars.png';
import loboBranco from '../../assets/iconeLobo.png';

export default function Register() {
  return (
    <div className="register-container">
      <Link className="arrow" to="/login">
        <FaArrowLeft size={24} color="#FFF" />
        Voltar
      </Link>

      <img src={loboBranco} alt="Icon" />

      <form>
        <div className="register_email">
          <FaEnvelope className="icon_register_email" />
          <input placeholder="Digite seu email" />
        </div>
        <div className="register_name">
          <FaUser className="icon_register_name" />
          <input placeholder="Digite seu nome" />
        </div>
        <div className="register_password">
          <FaLock className="icon_register_password" />
          <input type="password" placeholder="Digite sua senha" />
        </div>
        <div className="register_password">
          <FaLock className="icon_register_password" />
          <input type="password" placeholder="Confirme sua senha" />
        </div>

        <button className="button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
