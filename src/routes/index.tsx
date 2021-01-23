import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Registers from '../pages/Registers';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/login" />
      <Route component={Dashboard} path="/" exact />
      <Route component={Registers} path="/registers" exact />
    </BrowserRouter>
  );
};

export default Routes;
