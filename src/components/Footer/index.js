import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
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
          <nav className="top">
            <Link to="/">Início</Link>
            <Link to="/cursos">Cursos</Link>
            <Link to="/materias">Matérias</Link>
            <Link to="/professores">Professores</Link>
            <Link to="/projeto">O Projeto</Link>
          </nav>

          <section className="icones">
            <a
              href="https://www.facebook.com/ELOJuniorEngenhariaseArquitetura/"
              target="blank"
            >
              <button>
                <FaFacebookF size={25} color="#245086" />
              </button>
            </a>
            <a href="https://www.instagram.com/eloempresajunior" target="blank">
              <button>
                <FaInstagram size={25} color="#245086" />
              </button>
            </a>
            <Link to="/">
              <img src={iconeLobo} alt="projeto" />
            </Link>
            <a href="https://elojr.com.br/" target="blank">
              <button>
                <FaGlobe size={25} color="#245086" className="iconeGlobo" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/company/elo-engenharia-junior/"
              target="blank"
            >
              <button>
                <FaLinkedinIn size={25} color="#245086" />
              </button>
            </a>
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
