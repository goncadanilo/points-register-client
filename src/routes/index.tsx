import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route component={Dashboard} path="/" exact />
      <Route component={Login} path="/login" />
    </BrowserRouter>
  );
};

export default Routes;
