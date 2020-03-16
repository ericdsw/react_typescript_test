import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

type RouteParams = {
  path: string,
  component: React.ComponentType<any>,
  exact?: boolean,
  private?: boolean
}

const defaultRouteParams = {
  path: '',
  exact: true,
  private: false,
}

export default function createRoute(params: RouteParams) {

  const usedParameters = {...defaultRouteParams, ...params};

  if (usedParameters.private) {
    return <PrivateRoute key={usedParameters.path} {...usedParameters} />
  } else {
    return <Route key={usedParameters.path} {...usedParameters} />;
  }
}
