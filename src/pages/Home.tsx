import React, {useState} from 'react';
import GlobalStyles from '../styles.ts/globalStyles';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header'
import UserTable from '../components/tables/UserTable';

const Container = styled.div`
  margin-left: 250px;
  margin-right: 100px;
`;

const Home = () => {
  return (
    <>
    <GlobalStyles />
    <Sidebar />
    <Header />
    <Container>
        <h1 style = {{marginLeft:'10px', color: '#212121'}}>Welcome!</h1>
        <UserTable />
    </Container>
    
  </>
  
  );
};
export default Home;
