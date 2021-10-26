import { combineReducers } from "redux";
import { category } from "./category";
import { product } from "./product";

export const reducer = combineReducers({
  Reducers: category,
  product,
});

export default reducer;
