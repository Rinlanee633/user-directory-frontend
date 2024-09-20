import React from 'react';
import styled from 'styled-components';
import loginImage from '../assets/login.jpg';

const Wrapper = styled.div`
  display: flex;
  width: 800px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 380px;
    height: 600px;s
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  background: url(${loginImage}) center;
  background-size: cover;
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 93%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FogotPasswordLink = styled.a`
  margin-top: 10px;
  font-size: 14px;
  text-align: right;
  color: #1877f2;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #165ec7;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #1877f2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background: #165ec7;
  }
`;
const LoginForm = () => {
  return (
    // <Image src={loginImage} alt=""/>

      <Wrapper>
        <ImageContainer />
        <FormContainer>
          <h2>Login</h2>
          <Input type="text" placeholder="Email or Phone" />
          <Input type="password" placeholder="Password" />
          <FogotPasswordLink>Forgot Password?</FogotPasswordLink>
          <Button>Log In</Button>

        </FormContainer>
      </Wrapper>
   
  )
};

export default LoginForm;

