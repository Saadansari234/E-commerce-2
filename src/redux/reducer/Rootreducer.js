import { addToCart } from "./Reducer";
import { combineReducers } from "redux";

const RootReducer= combineReducers({
    ADD_TO_CART:addToCart
})

export default RootReducer