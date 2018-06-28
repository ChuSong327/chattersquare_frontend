import { combineReducers } from "redux";
import userReducer from "./userReducer";
import roomsReducer from "./roomsReducer";

const RootReducer = combineReducers({ userReducer, roomsReducer });

export default RootReducer;