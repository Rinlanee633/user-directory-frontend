import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { users } from '../mocks/loginUserData';
import GlobalStyles from '../styles.ts/globalStyles';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const LogoutButton = styled.button`
  padding: 8px 12px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px; // เพิ่มระยะห่างระหว่างชื่อและปุ่ม

  &:hover {
    background-color: #ff1a1a;
  }
`;

const Header = () => {
  const { logout, user } = useAuth();

  const currentUser = users.find((u) => u.username === user?.username);

  return (
    <>
      <GlobalStyles />
      <HeaderContainer>
        <div> 
        </div>
        {currentUser && (
          <ProfileContainer>
            <ProfileImage src={currentUser.profile} alt="Profile" />
            <span>{currentUser.fullName}</span>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </ProfileContainer>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
