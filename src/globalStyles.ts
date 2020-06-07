import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  section {
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #222;
    @media (max-width: 630px) {
      font-size: 20px;
    }
  }

  input {
    display: flex;
    background-color: transparent;
    border: none;
    flex-direction: row;
    flex: 1;
    margin-left: 6px;
    font-size: 20px;
    color: #ccc;
    @media (max-width: 630px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 16px;
    text-align: justify;
    margin-top: 6px;
  }

  button {
    cursor: pointer;
  }
`