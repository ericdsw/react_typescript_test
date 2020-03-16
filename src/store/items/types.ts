import Item from '../../models/Item';
import { ResponseError } from '../../services/networkTypes';

export interface ItemState {
  requestingList: boolean,
  requestingListError: ResponseError,
  items: Item[]
}

export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const REQUEST_ITEMS_SUCCESS = "REQUEST_ITEM_SUCCESS";
export const REQUEST_ITEMS_ERROR = "REQUEST_ITEM_ERROR";

export interface RequestItems {
  type: typeof REQUEST_ITEMS,
}

export interface RequestItemsSuccess {
  type: typeof REQUEST_ITEMS_SUCCESS,
  payload: { items: Item[] }
}

export interface RequestItemError {
  type: typeof REQUEST_ITEMS_ERROR,
  payload: ResponseError
}

export type ItemStateTypes = RequestItems | RequestItemsSuccess | RequestItemError;
