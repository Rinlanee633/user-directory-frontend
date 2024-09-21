import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import LoginForm from '../components/LoginForm';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%);
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const Login = () => {

  return (
    <>
      <GlobalStyle/>
      <LoginForm/>
    </>
  )
   
};

export default Login;
