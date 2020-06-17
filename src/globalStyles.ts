import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1c1c1c;
  }

  section {
    text-align: center;
    background-color: #1c1c1c;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #1c1c1c;
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
    font-size: 20px;
    color: #e8e8e8;
    @media (max-width: 630px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 14px;
    text-align: justify;
    @media (max-width: 630px) {
      font-size: 12px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #00BBB0;
    margin: 6px;
  }

  h4 {
    font-size: 16px;
    color: #e8e8e8;
  }


  button {
    cursor: pointer;
  }
`