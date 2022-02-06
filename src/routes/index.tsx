import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthContext } from '../contexts/AuthContext';
import Boilerplate from '../pages/Boilerplate';
import Dashboard from '../pages/Dashboard';
import ExperimentalEditor from '../pages/ExperimentalEditor';
import Login from '../pages/Login';

const Routes: React.FC = () => {
  const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const { isAuthenticated, isAuthenticating, checkToken } =
      useContext(AuthContext);

    useEffect(() => {
      checkToken();
    }, []);

    return (
      <Route {...rest}>
        {isAuthenticated ? (
          children
        ) : isAuthenticating ? (
          <Loading />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )}
      </Route>
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/boilerplate">
          <Boilerplate />
        </Route>
        <Route exact path="/editor">
          <ExperimentalEditor />
        </Route>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route>404</Route>
      </Switch>
    </Router>
  );
};

export default Routes;
