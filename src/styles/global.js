import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: Oswald, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a{
    text-decoration:none;
    
  }

  header{
    font:  700 17px Oswald, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  footer{
    font: 700 17px Oswald, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  button:hover{
    opacity: 0.9;
    
  }

`;
