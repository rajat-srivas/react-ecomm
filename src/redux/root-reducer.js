import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";

//user the combineReducers property to export all the reducers seperatly created into one root reducer with a key called the
//slice

export default combineReducers({
    user: UserReducer
});