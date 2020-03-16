import { AppThunk } from '../AppThunk';
import networkRequest from '../../services/networkRequest';
import Item from '../../models/Item';
import {
  REQUEST_ITEMS,
  REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_ERROR
} from './types';

export const getItems = () : AppThunk => async dispatch => {
  dispatch({type: REQUEST_ITEMS});
  try {
    const result = await networkRequest<Item>("GET", "items", {});
    dispatch({
      type: REQUEST_ITEMS_SUCCESS,
      payload: {
        items: result.payload
      }
    })
  } catch (e) {
    dispatch({
      type: REQUEST_ITEMS_ERROR,
      payload: e
    })
  }
}
