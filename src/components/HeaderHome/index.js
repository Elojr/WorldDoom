import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import iconeHeader from '../../assets/iconeHeader.png';
import iconeLobo from '../../assets/iconeLobo.png';
import iconeSearch from '../../assets/iconeSearch.png';
import './styles.css';

function HeaderHome() {
  return (
    <>
      <header>
        <section className="logo">
          <Link to="/">
            <img src={iconeLobo} alt="Projeto" />
          </Link>
          <h1>Sua Plataforma Colaborativa de Provas</h1>
          <Link to="/login">
            <button>
              <p>LOGIN </p>
              <FiLogIn class="iconeLogin" />
            </button>
          </Link>
        </section>

        <section className="search">
          <img src={iconeHeader} alt="De Alunos Para Alunos" id="iconeHeader" />
          <form>
            <input
              type="search"
              name="searchHome"
              id="searchHome"
              placeholder="Pesquise por Matéria ou Professor"
            />

            <button type="submit">
              <img src={iconeSearch} alt="" />
            </button>
          </form>
        </section>
        <section className="menu_home">
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

export default HeaderHome;
