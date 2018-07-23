import * as ChatRoomApiUtil from "../utils/chatRoomUtil";

const defaultAllRoomState = Object.freeze({
    allRooms: []
});

const allRoomsReducer = (
    state = defaultAllRoomState, action
) => {
    Object.freeze(state);
    switch (action.type) {
        case ChatRoomApiUtil.GET_ALL_ROOMS: 
            const allRooms = action.allRooms;
            const newAllRoomsState = Object.assign({}, state, { allRooms: allRooms });
            return newAllRoomsState;
        default:
            return state;
    }
};

export default allRoomsReducer;