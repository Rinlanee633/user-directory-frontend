import React, {useEffect, useState} from 'react';
import GlobalStyles from '../styles.ts/globalStyles';
import styled, {keyframes} from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header'
import UserTable from '../components/tables/UserTable';
import { useAuth } from '../contexts/AuthContext';


const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transfrom: traslatex(0);
    opacity: 1;
    
`;

const Container = styled.div`
  margin-left: 250px;
  margin-right: 100px;
  align-items: center;
`;

const Message = styled.h1<{slide: boolean}>`
  animation: ${props => props.slide ? slideIn : 'none'} 3s forwards;
  position: absolute;
  margin-left: 10px;
  color: #212121;

`;

const Home = () => {
  const { isLoggedIn } = useAuth();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setShowWelcome(true);
    }
  }, [isLoggedIn]); 

  return (
    <>
    <GlobalStyles />
    <Sidebar />
    <Header />
    <Container>
      <div style={{position: 'relative', height: '60px'}}>
          {showWelcome && <Message slide={showWelcome}>Welcome!</Message>}
      </div>
      <UserTable />
    </Container>
    
  </>
  
  );
};
export default Home;
