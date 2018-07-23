import * as ChatRoomApiUtil from "../utils/chatRoomUtil";

export const updateMessages = (messages, type) => {
    return {
        type: type,
        messages
    };
};

export const updateRoom = currentRoom => {
    return {
        type: ChatRoomApiUtil.GET_ROOM,
        currentRoom
    }
};

export const updateUsers = users => {
    return {
        type: ChatRoomApiUtil.GET_ROOM_USERS,
        users
    }
};

export const updateAllRooms = allRooms => {
    return {
        type: ChatRoomApiUtil.GET_ALL_ROOMS,
        allRooms
    }
};

export const retrieveCurrentRoom = params => {
    return (dispatch) => {
        ChatRoomApiUtil.retrieveCurrentRoom(params).then((currentRoom) => {
            dispatch(updateRoom(currentRoom));
            return currentRoom;
        })
    }
};

export const getRoomMessages = params => {
    return (dispatch) => {
        return ChatRoomApiUtil.getRoomMessages(params).then((messages) => {
            dispatch(updateMessages(messages, ChatRoomApiUtil.GET_ROOM_MESSAGES));
            return messages;
        })
    }
};

export const postRoomMessages = params => {
    return (dispatch) => {
        ChatRoomApiUtil.postRoomMessages(params).then(messages => {
            dispatch(updateMessages(messages, ChatRoomApiUtil.POST_ROOM_MESSAGES));
            return messages;
        })
    }
};

export const getRoomUsers = params => {
    return (dispatch) => {
        ChatRoomApiUtil.getRoomUsers(params).then(users => {
            dispatch(updateUsers(users));
            return users;
        })
    }
};

export const getAllRooms = () => {
    return (dispatch) => {
        ChatRoomApiUtil.getAllRooms().then(allRooms => {
            dispatch(updateAllRooms(allRooms));
            return allRooms;
        })
    }
};
