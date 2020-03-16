import React from 'react';
import { Route } from 'react-router-dom';
import NotFoundPage from '../components/General/NotFoundPage';

const FallbackRoute = () => {
  return <Route component={NotFoundPage} />
}

export default FallbackRoute;
