import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Context } from '../contexts/AuthContext';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Registers from '../pages/Registers';
import Users from '../pages/Users';

function CustomRoute({ isPrivate, ...rest }: any) {
  const { authenticated } = useContext(Context);

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
}

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute component={Login} path="/login" />
        <CustomRoute isPrivate component={Dashboard} path="/" exact />
        <CustomRoute isPrivate component={Registers} path="/registers" />
        <CustomRoute isPrivate component={Users} path="/users" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
