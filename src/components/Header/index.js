import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import iconeLobo from '../../assets/iconeLobo.png';

import './styles.css';

function Header() {
  return (
    <>
      <header>
        <section className="logo">
          <a href="/">
            <img src={iconeLobo} alt="Projeto" />
          </a>
          <Link to="/login">
            <button>
              <p>LOGIN </p>
              <FiLogIn class="iconeLogin" />
            </button>
          </Link>
        </section>

        <section className="menu">
          <nav>
            <Link to="/">Início</Link>
            <Link to="/cursos">Cursos</Link>
            <Link to="/materias">Matérias</Link>
            <Link to="/professores">Professores</Link>
            <Link to="/projeto">O Projeto</Link>
          </nav>
        </section>
      </header>
    </>
  );
}

export default Header;
