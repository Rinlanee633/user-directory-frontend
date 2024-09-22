import React, {useState} from 'react';
import GlobalStyles from '../styles.ts/globalStyles';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';

const AppContainer = styled.div`
  margin-left: 250px;
  transition: margin-left 0.3s ease;
`;

const Home = () => {
  return (
    <>
    <GlobalStyles />
    <Sidebar />
  </>
  
  );
};
export default Home;
