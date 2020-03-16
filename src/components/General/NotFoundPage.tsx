import React from 'react';
import DashboardPage from '../BasePages/DashboardPage';
import { Typography } from '@material-ui/core';

const NotFoundPage = () => {
  return (
    <DashboardPage>
      <Typography variant='h3' align='center'>404</Typography>
      <Typography variant='h3' align='center'>Page Not Found</Typography>
    </DashboardPage>
  )
}

export default NotFoundPage
