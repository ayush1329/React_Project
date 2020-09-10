import { combineReducers } from "redux";
import authReducer from "./AuthReducer";


const authReducers = combineReducers({
    auth: authReducer
});

export default authReducers;