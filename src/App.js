import React from 'react';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import GlobalStyle from './styles/global';

import Routes from './routes/routes';

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Routes />

      <Footer />
    </>
  );
}

export default App;
