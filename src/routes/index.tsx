import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Registers from '../pages/Registers';
import Users from '../pages/Users';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Dashboard} path="/" exact />
        <Route component={Registers} path="/registers" />
        <Route component={Users} path="/users" />

        <Route component={() => <h1>404 - Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
