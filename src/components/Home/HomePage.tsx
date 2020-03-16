import React from 'react';
import DashboardPage from '../BasePages/DashboardPage';
import { Typography } from '@material-ui/core';

const HomePage = () => {
  return (
    <DashboardPage>
      <Typography>Home page. Visit /items for an actual page</Typography>
    </DashboardPage>
  )
}

export default HomePage;
