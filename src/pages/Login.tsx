import React from 'react';
import { createGlobalStyle } from 'styled-components';
import GlobalStyles from '../styles.ts/globalStyles';
import LoginForm from '../components/LoginForm';

const LoginGlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%);
    height: 100vh;
  }
`;

const Login = () => {

  return (
    <>
      <GlobalStyles/>
      <LoginGlobalStyle/>
      <LoginForm/>
    </>
  )
   
};

export default Login;
