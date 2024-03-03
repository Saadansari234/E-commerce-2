import { addToCart,  loginInfo } from "./Reducer";
import { combineReducers } from "redux";

const RootReducer= combineReducers({
    ADD_TO_CART:addToCart,
    LOGIN_INFO:loginInfo,
})

export default RootReducer