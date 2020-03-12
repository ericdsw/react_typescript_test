import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store/createRootReducer';
import {
  showGlobalMessage, showGlobalErrorMessage, showGlobalSuccessMessage
} from '../store/application/actions';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const MainWrapper : React.FC<Props> = props => {

  const handleMessageClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    props.showGlobalMessage('');
  }

  const handleSuccessMessageClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    props.showGlobalSuccessMessage('');
  }

  const handleErrorMessageClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    props.showGlobalErrorMessage('');
  }

  return (
    <main style={{flexGrow: 1}}>

      {props.children}

      {/* Generic Message Snackbar */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.globalMessage !== ''}
        autoHideDuration={props.alertDuration}
        onClose={handleMessageClose}
      >
        <Alert
          variant='filled'
          severity='info'
          onClose={handleMessageClose}
        >
          {props.globalMessage}
        </Alert>
      </Snackbar>

      {/* Generic Success Message Snackbar */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={props.globalSuccessMessage !== ''}
        autoHideDuration={props.alertDuration}
        onClose={handleSuccessMessageClose}
      >
        <Alert
          variant='filled'
          severity='success'
          onClose={handleSuccessMessageClose}
        >
          {props.globalSuccessMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={props.globalErrorMessage !== ''}
        autoHideDuration={props.alertDuration}
        onClose={handleSuccessMessageClose}
      >
        <Alert
          variant='filled'
          severity='error'
          onClose={handleErrorMessageClose}
        >
          {props.globalErrorMessage}
        </Alert>
      </Snackbar>

    </main>
  )
}
MainWrapper.defaultProps = { alertDuration: 6000 }

const mapStateToProps = (state: RootState) => ({
    globalErrorMessage: state.app.globalErrorMessage,
    globalSuccessMessage: state.app.globalSuccessMessage,
    globalMessage: state.app.globalMessage
});

const reduxActions = { showGlobalMessage, showGlobalErrorMessage, showGlobalSuccessMessage }

const connector = connect(mapStateToProps, reduxActions);
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux{
  alertDuration? : number,
  children?: JSX.Element | JSX.Element[]
}
export default connector(MainWrapper);
