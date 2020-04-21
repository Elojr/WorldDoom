import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');
  
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
  }

  header{
    font: 700 17px Oswald, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

`;
