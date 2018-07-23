import * as ChatRoomApiUtil from "../utils/chatRoomUtil";

const defaultRoomUsersState = Object.freeze({
    users: []
});

const roomUsersReducer = (
    state = defaultRoomUsersState, action
) => {
    Object.freeze(state);
    let users;
    let newRoomUsersState;
   switch (action.type) {
       case ChatRoomApiUtil.GET_ROOM_USERS:
            users = action.users;
            newRoomUsersState = Object.assign({}, state, { users: users });
            return newRoomUsersState;
        default:
            return state;
   }
};

export default roomUsersReducer;