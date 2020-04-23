import React from 'react';
import './styles.css';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

import iconeLobo from '../../assets/iconeLobo.png';
import logoELO from '../../assets/logoELO.png';

function Footer() {
  return (
    <>
      <footer>
        <section className="top">
          <nav>
            <a href="/">Início</a>
            <a href="/cursos">Cursos</a>
            <a href="/materias">Matérias</a>
            <a href="/professores">Professores</a>
            <a href="/projeto">O Projeto</a>
          </nav>

          <section className="icones">
            <button>
              <FaFacebookF size={25} color="#245086" />
            </button>
            <button>
              <FaInstagram size={25} color="#245086" />
            </button>
            <img src={iconeLobo} alt="projeto" />
            <button>
              <FaGlobe size={25} color="#245086" />
            </button>
            <button>
              <FaLinkedinIn size={25} color="#245086" />
            </button>
          </section>
        </section>

        <section className="bottom">
          <img src={logoELO} alt="" />
          <h1>COPYRIGHT © 2020 ELO ENGENHARIAS, INC.</h1>
        </section>
      </footer>
    </>
  );
}

export default Footer;
