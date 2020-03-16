import { ItemState, ItemStateTypes } from './types';
import {
  REQUEST_ITEMS,
  REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_ERROR
} from './types';

const initialState : ItemState = {
  requestingList: false,
  requestingListError: {
    error: ''
  },
  items: []
}

export default function itemReducer(state = initialState, action: ItemStateTypes) {
  switch(action.type) {
    case REQUEST_ITEMS:
      return {
        ...state, requestingList: true,
        requestingListError: { error: '' }
      }
    case REQUEST_ITEMS_SUCCESS:
      return {
        ...state, requestingList: false,
        items: action.payload.items
      }
    case REQUEST_ITEMS_ERROR:
      return {
        ...state, requestingList: false, requestingListError: action.payload
      }
    default:
      return state;
  }
}
