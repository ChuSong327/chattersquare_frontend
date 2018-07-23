import { combineReducers } from "redux";

import currentUserReducer from "./userReducer";
import userRoomsReducer from "./userRoomsReducer";
import userFriendsReducer from "./userFriendsReducer";
import currentRoomReducer from "./currentRoomReducer";
import roomMessagesReducer from "./roomMessagesReducer";
import roomUsersReducer from "./roomUsersReducer";
import allRoomsReducer from "./allRoomsReducer";

const RootReducer = combineReducers({ 
    currentUserReducer,
    currentRoomReducer, 
    userRoomsReducer,
    userFriendsReducer,
    roomMessagesReducer,
    roomUsersReducer,
    allRoomsReducer
});

export default RootReducer;