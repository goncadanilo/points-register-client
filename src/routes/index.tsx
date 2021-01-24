import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Registers from '../pages/Registers';
import Users from '../pages/Users';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route component={Dashboard} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Registers} path="/registers" />
      <Route component={Users} path="/users" />
    </BrowserRouter>
  );
};

export default Routes;
