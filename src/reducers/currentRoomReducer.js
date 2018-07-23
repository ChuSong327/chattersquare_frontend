import * as ChatRoomApiUtil from "../utils/chatRoomUtil";

const defaultCurrentRoomState = Object.freeze({
    currentRoom: {}
});

const currentRoomReducer = (
    state = defaultCurrentRoomState, action
) => {
    Object.freeze(state);
    switch (action.type) {
        case ChatRoomApiUtil.GET_ROOM: 
            const currentRoom = action.currentRoom;
            const newCurrentRoomState = Object.assign({}, state, { currentRoom: currentRoom });
            return newCurrentRoomState;
        default:
            return state;
    }
};

export default currentRoomReducer;