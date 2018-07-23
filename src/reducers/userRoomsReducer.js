import * as UserApiUtil from "../utils/userUtil";

const defaultUserRoomsState = Object.freeze({
    rooms: []
});

const userRoomsReducer = (
    state = defaultUserRoomsState, action
 ) => {
    Object.freeze(state);
    let rooms;
    let newUserRoomsState;
    switch (action.type) {
        case UserApiUtil.GET_ROOMS: 
            rooms = action.rooms
            newUserRoomsState = Object.assign({}, state, { rooms: rooms });
            return newUserRoomsState;
        case UserApiUtil.JOIN_ROOM: 
            rooms = action.rooms
            newUserRoomsState = Object.assign({}, state, { rooms: rooms });
            return newUserRoomsState;
        case UserApiUtil.REMOVE_ROOM: 
            rooms = action.rooms
            newUserRoomsState = Object.assign({}, state, { rooms: rooms });
            return newUserRoomsState;
        default:
            return state;
    }
};

export default userRoomsReducer;