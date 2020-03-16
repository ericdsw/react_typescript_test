import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  SwipeableDrawer, List, ListItem, ListItemText
} from '@material-ui/core';
import { RootState } from '../../store/createRootReducer';
import { toggleDrawer } from '../../store/application/actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
  drawerList: {
    width: 250,
  },
}));

const Drawer = (props: Props) => {

  const classes = useStyles();

  const onDrawerClose = () => {
    props.toggleDrawer(false);
  }

  const onDrawerOpen = () => {
    props.toggleDrawer(true);
  }

  return (
    <SwipeableDrawer
      open={props.drawerOpen}
      onClose={onDrawerClose}
      onOpen={onDrawerOpen}
    >
      <div
        className={classes.drawerList}
        role='presentation'
        onClick={onDrawerClose}
        onKeyDown={onDrawerClose}
      >
        <List>
          {
            props.options.map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))
          }
        </List>
      </div>
    </SwipeableDrawer>
  );
}

const mapStateToProps = (state: RootState) => ({
  drawerOpen: state.app.drawerOpen,
});
const reduxActions = { toggleDrawer };
const connector = connect(mapStateToProps, reduxActions);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  options: string[]
}

export default connector(Drawer);
