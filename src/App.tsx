import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createTheme from './theme/createTheme';
import { MuiThemeProvider, createStyles, makeStyles } from '@material-ui/core/styles';
import { history } from './store';
import { CssBaseline, PaletteType } from '@material-ui/core';
import { RootState } from './store/createRootReducer';
import { Switch } from 'react-router-dom';

import MainWrapper from './components/MainWrapper';
import { routes, FallbackRoute } from './routing';

// This is a call to a method that dispatches a redux action with thunk
import { showGlobalMessage } from './store/application/actions';

const styles = createStyles({
  root: {
    minHeight: '100%',
  },
  content: {
    flexGrow: 1,
  },
});

const App = (props: Props) => {

  const classes = makeStyles(styles)();
  const theme = createTheme({
    palette: {
      type: props.themeMode as PaletteType
    }
  });

  return (
    <ConnectedRouter history={history}>
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <MainWrapper>
            <Switch>
              {routes.map(route => (route))}
              <FallbackRoute />
            </Switch>
          </MainWrapper>
        </MuiThemeProvider>
      </div>
    </ConnectedRouter>
  )
}

// First declare MapStateToProps
const mapStateToProps = (state: RootState) => ({
  themeMode: state.app.themeMode,
});

// Next, declare the actions
const reduxActions = { showGlobalMessage }

// The `connect` function returns an instance of connector, which we
// usually just chain call with the component as a parameter. Here
// we will separate these calls to use the connector to generate
// the PropsFromRedux type, which will shape the component properties
const connector = connect(mapStateToProps, reduxActions);
type PropsFromRedux = ConnectedProps<typeof connector>

// Create an interface that extends the PropsFronRedux types
// All properties that are passed by the parent component are defined here.
interface Props extends PropsFromRedux {
  // Empty Implementation, only receive properties from redux
}

export default connector(App);
