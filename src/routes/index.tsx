import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Context } from '../contexts/AuthContext';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Registers from '../pages/Registers';
import Users from '../pages/Users';

function CustomRoute({ isPrivate, admin, employee, ...rest }: any) {
  const { authenticated, currentUser } = useContext(Context);

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  if (admin && currentUser.role !== 'ADMINISTRATOR') {
    return <Redirect to="/registers" />;
  }

  if (employee && currentUser.role !== 'EMPLOYEE') {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute component={Login} path="/login" />
        <CustomRoute isPrivate admin component={Dashboard} path="/" exact />
        <CustomRoute
          isPrivate
          employee
          component={Registers}
          path="/registers"
        />
        <CustomRoute isPrivate admin component={Users} path="/users" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
