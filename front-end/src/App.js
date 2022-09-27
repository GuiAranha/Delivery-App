import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import OrderDetail from './pages/OrderDetail';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders/" element={ <Order /> } />
        <Route exact path="/customer/orders/:id" element={ <OrderDetail /> } />
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="*" element={ <Navigate to="/login" /> } />
        <Route exact path="/register" element={ <Register /> } />
      </Routes>
    </AppProvider>
  );
}

export default App;
