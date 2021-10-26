import { ActionTypes } from "../contants/actions";

export const setCategory = (category) => {
  return {
    type: ActionTypes.SET_CATEGORY,
    payload: category,
  };
};
export const setProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
