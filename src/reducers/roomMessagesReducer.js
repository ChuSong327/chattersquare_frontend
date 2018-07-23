import * as ChatRoomApiUtil from "../utils/chatRoomUtil";

const defaultRoomMessagesState = Object.freeze({
    messages: []
});

const roomMessagesReducer = (
    state = defaultRoomMessagesState, action
) => {
    Object.freeze(state);
    let messages;
    let newRoomMessagesState;
   switch (action.type) {
       case ChatRoomApiUtil.GET_ROOM_MESSAGES:
            messages = action.messages;
            newRoomMessagesState = Object.assign({}, state, { messages: messages });
            return newRoomMessagesState;
        case ChatRoomApiUtil.POST_ROOM_MESSAGES:
            messages = action.messages;
            newRoomMessagesState = Object.assign({}, state, { messages: messages });
            return newRoomMessagesState;
        default:
            return state;
   }
};

export default roomMessagesReducer;