import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Card, CardContent, Typography, Button, Grid, CircularProgress } from '@material-ui/core';
import { RootState } from '../../store/createRootReducer';
import { getItems } from '../../store/items/actions';
import Item from '../../models/Item';
import DashboardPage from '../BasePages/DashboardPage';

const ItemListPage = (props: Props) => {

  const getItemList = (event: React.MouseEvent | MouseEvent) => {
    props.getItems();
  }

  return (
    <DashboardPage>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
            disabled={props.requesting}
            onClick={e => getItemList(e)}
          >
            {(props.requesting) ? 'Requesting items...' : 'Request items'}
          </Button>
        </Grid>
        <Grid item xs={12}>
          {!props.requesting && !props.error.error && props.items.length <= 0 &&
            <Typography variant='caption'>No items found</Typography>
          }
          {!props.requesting && props.error.error &&
            <Typography variant='caption'>{props.error.error}</Typography>
          }
          {props.requesting &&
            <CircularProgress />
          }
        </Grid>
        <Grid item xs={12}>
          {props.items.map((item: Item) => (
            <Card key={item.id}>
              <CardContent>
                {item.name}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </DashboardPage>
  );
}

const mapStateToProps = (state: RootState) => ({
  items: state.item.items,
  requesting: state.item.requestingList,
  error: state.item.requestingListError
});

const reduxActions = { getItems }

const connector = connect(mapStateToProps, reduxActions);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {

}

export default connector(ItemListPage);
