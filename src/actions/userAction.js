import * as UserApiUtil from "../utils/userUtil";

export const updateUser = (currentUser, type) => {
    return {
        type: type,
        currentUser
    };
};

export const updateRooms = (rooms, type) => {
    return {
        type: type,
        rooms
    };
};

export const updateFriends = (friends, type) => {
    return {
        type: type,
        friends
    }
};

export const signIn = (params) => {
    return (dispatch) => {
        return UserApiUtil.signIn(params).then(user => {
            dispatch(updateUser(user, UserApiUtil.SIGN_IN));
            return user;
        })
    };
};

export const signUp = (params) => {
    return (dispatch) => {
        return UserApiUtil.signUp(params).then(user => {
            dispatch(updateUser(user, UserApiUtil.SIGN_UP));
            return user;
        });
    }
};

export const retrieveUser = (params) => {
    return (dispatch) => {
        return UserApiUtil.retrieveUser(params).then(currentUser => {
            dispatch(updateUser(currentUser, UserApiUtil.RETRIEVE_USER));
            return currentUser;
        })
    }
};

export const getRooms = (params) => {
    return (dispatch) => {
        return UserApiUtil.getRooms(params).then(rooms => {
            dispatch(updateRooms(rooms, UserApiUtil.GET_ROOMS));
            return rooms;
        })
    }
};

export const joinRoom = params => {
    return (dispatch) => {
        return UserApiUtil.joinRoom(params).then(rooms => {
            dispatch(updateRooms(rooms, UserApiUtil.JOIN_ROOM));
            return rooms;
        })
    }
};

export const removeRoom = params => {
    return (dispatch) => {
        return UserApiUtil.removeRoom(params).then(rooms => {
            dispatch(updateRooms(rooms, UserApiUtil.REMOVE_ROOM));
            return rooms;
        })
    }
};

export const getFriends = (params) => {
    return (dispatch) => {
        return UserApiUtil.getFriends(params).then(friends => {
            dispatch(updateFriends(friends, UserApiUtil.GET_FRIENDS));
            return friends;
        })
    }
};

export const updateUserInfo = params => {
    return (dispatch) => {
        return UserApiUtil.updateUserInfo(params).then(currentUser => {
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            dispatch(updateUser(currentUser, UserApiUtil.UPDATE_USER_INFO));
            return currentUser;
        })
    }
};

export const deleteFriends = params => {
    return (dispatch) => {
        return UserApiUtil.deleteFriends(params).then((friends) => {
            dispatch(updateFriends(friends, UserApiUtil.DELETE_FRIENDS));
            return friends;
        })
    }
};

export const addFriends = params => {
    return (dispatch) => {
        return UserApiUtil.addFriends(params).then(friends => {
            dispatch(updateFriends(friends, UserApiUtil.ADD_FRIENDS));
        })
    }
};


