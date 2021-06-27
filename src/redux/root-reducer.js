import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import UserReducer from "./user/user.reducer";

//uses the combineReducers property to export all the reducers seperatly created into one root reducer with a key called the
//slice

export default combineReducers({
    user: UserReducer,
    cart: cartReducer
});