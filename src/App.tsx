import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createTheme from './theme/createTheme';
import { MuiThemeProvider, createStyles, makeStyles } from '@material-ui/core/styles';
import { history } from './store';
import { CssBaseline } from '@material-ui/core';
import { RootState } from './store/createRootReducer';

import MainWrapper from './components/MainWrapper';
import DashboardPage from './components/BasePages/DashboardPage';

import { showGlobalMessage } from './store/application/actions';

const styles = createStyles({
  root: {
    minHeight: '100%',
  },
  content: {
    flexGrow: 1,
  },
});

const App : React.FC<Props> = props => {

  const classes = makeStyles(styles)();

  return (
    <ConnectedRouter history={history}>
      <div className={classes.root}>
        <MuiThemeProvider theme={createTheme(props.themeMode)}>
          <CssBaseline />
          <MainWrapper>
            <DashboardPage>
              <div>FOO</div>
            </DashboardPage>
          </MainWrapper>
        </MuiThemeProvider>
      </div>
    </ConnectedRouter>
  )
}

const mapStateToProps = (state: RootState) => ({
  themeMode: state.app.themeMode
});
const reduxActions = { showGlobalMessage }
const connector = connect(mapStateToProps, reduxActions);

type PropsFromRedux = ConnectedProps<typeof connector>
interface Props extends PropsFromRedux {

}

export default connector(App);
