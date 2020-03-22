import { AppThunk } from "../AppThunk";
import networkRequest from "../../services/networkRequest";
import Item from "../../models/Item";
import {
  REQUEST_ITEMS,
  REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_ERROR
} from "./types";
import { Dispatch, AnyAction } from "redux";

export const getItems = (): AppThunk<Promise<AnyAction>> => async (
  dispatch: Dispatch
): Promise<AnyAction> => {
  dispatch({ type: REQUEST_ITEMS });
  try {
    const result = await networkRequest<Item>("GET", "items", {});
    return dispatch({
      type: REQUEST_ITEMS_SUCCESS,
      payload: {
        items: result.payload
      }
    });
  } catch (e) {
    return dispatch({
      type: REQUEST_ITEMS_ERROR,
      payload: e
    });
  }
};
