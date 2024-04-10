import { addToCart,  loginInfo, signinInfo } from "./Reducer";
import { combineReducers } from "redux";

const RootReducer= combineReducers({
    ADD_TO_CART:addToCart,
    LOGIN_INFO:loginInfo,
    SIGNIN_INFO:signinInfo,
})

export default RootReducer