import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import ApplicationBar from '../General/ApplicationBar';
import Drawer from '../General/Drawer';
import { RootState } from '../../store/createRootReducer';
import { toggleDrawer } from '../../store/application/actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
  content: {
    padding: theme.spacing(2)
  }
}));

const DashboardPage : React.FC<Props> = props => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <ApplicationBar appName='This is the app name' />
      <Drawer options={["First Option", "Second Option"]} />
      <div className={classes.content}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state: RootState) => ({
  drawerOpen: state.app.drawerOpen
});
const reduxActions = { toggleDrawer };
const connector = connect(mapStateToProps, reduxActions);
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  children?: JSX.Element | JSX.Element[]
}

export default connector(DashboardPage);
