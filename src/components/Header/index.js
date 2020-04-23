import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import iconeHeader from '../../assets/iconeHeader.png';
import iconeLobo from '../../assets/iconeLobo.png';
import iconeSearch from '../../assets/iconeSearch.png';
import './styles.css';

function Header() {
  return (
    <>
      <header>
        <section className="logo">
          <a href="/">
            <img src={iconeLobo} alt="Projeto" />
          </a>
          <h1>Sua Plataforma Colaborativa de Provas</h1>
          <button>
            <p>LOGIN </p>
            <FiLogIn class="iconeLogin" />
          </button>
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
        <section className="menu">
          <nav>
            <a href="/">Início</a>
            <a href="/cursos">Cursos</a>
            <a href="/materias">Matérias</a>
            <a href="/professores">Professores</a>
            <a href="/projeto">O Projeto</a>
          </nav>
        </section>
      </header>
    </>
  );
}

export default Header;
