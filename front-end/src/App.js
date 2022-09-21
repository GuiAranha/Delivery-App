import React from 'react';
import { Route, Switch, Navigate } from "react-router-dom";
import AppProvider from './context/AppProvider';
import Login from './pages/Login';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Navigate to="/login"/>} />
        <Route exact path="*" element={<Navigate to="/login"/>} />
      </Switch>
    </AppProvider>
  );
}

export default App;
