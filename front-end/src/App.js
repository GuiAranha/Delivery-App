import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="*" element={ <Navigate to="/login" /> } />
        <Route exact path="/register" element={ <Register /> } />
      </Routes>
    </AppProvider>
  );
}

export default App;
