import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SessionManager from '../services/SessionManager';

const PrivateRoute = ({component, ...rest} : any) => {

  const sessionManager = new SessionManager();

  return (
    <Route
      {...rest}
      render={(props: any) => (
        sessionManager.isLoggedIn() ?
          React.createElement(component, props) :
          <Redirect to={{ pathname: '/login' }} />
      )}
    />
  );
}

export default PrivateRoute;





