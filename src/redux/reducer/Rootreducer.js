import { addToCart,  loginInfo, signinInfo,activateinfo } from "./Reducer";
import { combineReducers } from "redux";

const RootReducer= combineReducers({
    ADD_TO_CART:addToCart,
    LOGIN_INFO:loginInfo,
    SIGNIN_INFO:signinInfo,
    ACTIVATE_INFO:activateinfo,
})

export default RootReducer