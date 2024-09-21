import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
            path = "/home"
            element = { isLoggedIn ? <Home /> : <Navigate to="/login" replace={true} />}
        />
        {/* <Route path = "/login" element = { isLoggedIn ? <Navigate to="/home" replace={true} /> : <Login />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
      
      </Routes>
    </Router>
  )
}

export default App;
