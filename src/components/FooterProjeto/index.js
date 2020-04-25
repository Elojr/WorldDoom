import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import bookSombra from '../../assets/bookSombra.png';
import iconeLoboSombra from '../../assets/iconeLoboSombra.png';
import logoELO from '../../assets/logoELO.png';

function FooterProjeto() {
  return (
    <>
      <footer>
        <section className="topper">
          <div className="text">
            <h1>QUER SABER MAIS SOBRE NÓS?</h1>
            <a
              href="https://elojr.com.br/servicos-e-solucoes/solucoes-em-tecnologia/"
              target="blank"
            >
              <button>
                <img src={bookSombra} alt="" />
                CLIQUE AQUI
              </button>
            </a>
          </div>
          <div className="img">
            <img src={iconeLoboSombra} alt="EloJr" />
          </div>
        </section>

        <section className="top">
          <nav className="topProjeto">
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

export default FooterProjeto;
