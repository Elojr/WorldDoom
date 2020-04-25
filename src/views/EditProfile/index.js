import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiImage, FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import layerStars from '../../assets/layerStars.png'
import fotoPerfil from '../../assets/iconProfile.png';

export default function EditProfile () {
    return(
        <div className="editprofile-container">
            
            <Link className="arrow" to="/register">
                <FiArrowLeft size={24} color="#FFF" />
                Voltar
            </Link>

            <img src={fotoPerfil} alt="Icon" />

            <h1>Nome do Usuário</h1>
            <h3>Curso do Usuário</h3>

            <form>
                <input placeholder="Escolha o seu curso" />
                <input placeholder="Nome de usuário" />

                    <div className="profile">
                        <text>Foto de perfil</text>
                        <button className="image" type="submit">
                            <FiImage size={28} color="#FFF" />
                        </button>
                    </div>

                <input type="password" placeholder="Confirme sua senha" />

                <button className="button" type="submit">Enviar</button>

            </form>
        </div>
    );
}