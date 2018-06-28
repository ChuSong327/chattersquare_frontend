import * as RoomsApiUtil from "../utils/roomsUtil";

const defaultRoomsState = Object.freeze({
    rooms: [],
});

const roomsReducer = (
    state = defaultRoomsState, action
) => {
    Object.freeze(state);
    switch (action.type){
        case RoomsApiUtil.GET_ROOMS:
            const rooms = action.rooms;
            const newRoomsState = Object.assign({}, state, { rooms: rooms});
            return newRoomsState;
        default:
            return state;
    };
};

export default roomsReducer;