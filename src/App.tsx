import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
    </AuthProvider>
  )
}

export default App;
