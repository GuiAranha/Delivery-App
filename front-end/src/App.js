import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import OrdersDetails from './pages/OrdersDetails';
import Manage from './pages/Manage';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/customer/products" element={ <Products /> } />
        <Route
          exact
          path="/customer/orders/"
          element={ <Orders userRole="customer" /> }
        />
        <Route exact path="/customer/orders/:id" element={ <OrderDetail /> } />
        <Route
          exact
          path="/seller/orders/"
          element={ <Orders userRole="seller" /> }
        />
        <Route exact path="/seller/orders/:id" element={ <OrdersDetails /> } />
        <Route exact path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/admin/manage/" element={ <Manage /> } />
        <Route exact path="*" element={ <Login /> } />
      </Routes>
    </AppProvider>
  );
}

export default App;
