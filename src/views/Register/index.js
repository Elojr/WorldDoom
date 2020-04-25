import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import layerStars from '../../assets/layerStars.png'
import loboBranco from '../../assets/iconeLobo.png';

export default function Register() {
    return(
        <div className="register-container">
            
            <Link className="arrow" to="/login">
                <FiArrowLeft size={24} color="#FFF" />
                Voltar
            </Link>

            <img src={loboBranco} alt="Icon" />

            <form>
                <input placeholder="Digite seu email" />
                <input placeholder="Digite seu nome" />
                <input type="password" placeholder="Digite sua senha" />
                <input type="password" placeholder="Confirme sua senha" />

                <button className="button" type="submit">Cadastrar</button>

            </form>
        </div>
    );
}
