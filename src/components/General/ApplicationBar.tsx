import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { RootState } from '../../store/createRootReducer';

import { toggleDarkMode, toggleDrawer } from '../../store/application/actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ApplicationBar : React.FC<Props> = props => {

  const classes = useStyles();

  const themeButtonPressed = () => {
    props.toggleDarkMode(props.themeMode !== 'dark');
  }

  const drawerButtonPressed = () => {
    props.toggleDrawer(!props.drawerOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start' className={classes.menuButton} color='inherit' aria-label='menu'
            onClick={drawerButtonPressed}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {props.appName}
          </Typography>
          <IconButton onClick={themeButtonPressed}>
            {(props.themeMode === 'dark') ? <BrightnessHighIcon /> : <Brightness2Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );

}

// Redux configuration

const mapStateToProps = (state: RootState) => ({
  themeMode: state.app.themeMode,
  drawerOpen: state.app.drawerOpen
});
const reduxActions = { toggleDarkMode, toggleDrawer };
const connector = connect(mapStateToProps, reduxActions)
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  appName: string
}

export default connector(ApplicationBar);
