import styled, { createGlobalStyle } from "styled-components";
import * as colors from '../config/colors'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.primaryDarkColor};
    font-family: sans-serif;
    color: ${colors.primaryColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify_toast-container .Toastify__toast--sucess {
    background-color: ${colors.sucessColor};
  }
  body .Toastify .Toastify_toast-container .Toastify__toast--error {
    background-color: ${colors.errorColor};
  }
`

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
