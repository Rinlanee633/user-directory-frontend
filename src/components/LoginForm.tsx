import React , { useState, useEffect } from 'react';
import styled from 'styled-components';
import loginImage from '../assets/images/login.jpg';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

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
  width: 
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ForgotPasswordContainer = styled.div`
    margin-top: 10px;
    text-align: right;
`;

const FogotPasswordLink = styled.a`
  font-size: 14px;
  color: #0088ff;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #165ec7;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #0088ff;
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
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
        navigate('/home', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login(username, password);
    console.log(isLoggedIn);
   
  }

  return (
      <Wrapper>
        <ImageContainer />
        <FormContainer>
          <h2 style={{ textAlign: 'center' }}>MyDash</h2>

          <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <ForgotPasswordContainer>
              <FogotPasswordLink>Forgot Password?</FogotPasswordLink>
            </ForgotPasswordContainer>

            <Button type="submit">Login</Button>
          </form>

        </FormContainer>
      </Wrapper>
   
  )
};

export default LoginForm;

