import React, { useState } from 'react';
import styled from 'styled-components';
import { User } from '../../models/User'; // import User interface

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Background transparent */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  float: right;
`;

const UserDetail = styled.div`
  margin-bottom: 10px;
`;

interface ModalProps {
  user: User | null;
  onClose: () => void;
}

const UserDetailModal: React.FC<ModalProps> = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>User Details</h2>
        <UserDetail><strong>ID:</strong> {user.id}</UserDetail>
        <UserDetail><strong>Name:</strong> {user.name}</UserDetail>
        <UserDetail><strong>Email:</strong> {user.email}</UserDetail>
        <UserDetail><strong>Phone:</strong> {user.phone}</UserDetail>
        <UserDetail><strong>Address:</strong> {user.address}</UserDetail>
        <UserDetail><strong>Role:</strong> {user.role}</UserDetail>
        <UserDetail><strong>Join Date:</strong> {user.joinDate.toDateString()}</UserDetail>
        <UserDetail><strong>Status:</strong> {user.status}</UserDetail>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserDetailModal;
