import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {

  const { logout, user } = useAuth();
  
  return (
    <div style={{ padding: '20px' }}>
    <h1>Welcome to the Home Page!</h1>
    {user && <h2>Hello, {user.username}!</h2>}
    <button onClick={logout}>Logout</button>
  </div>
  );
};
export default Home;
