import * as UserApiUtil from "../utils/userUtil";

const defaultUserFriendsState = Object.freeze({
    friends: []
});

const userFriendsReducer = (
    state = defaultUserFriendsState, action
) => {
    Object.freeze(state);
    let friends;
    let newUserFriendsState;
    switch (action.type) {
        case UserApiUtil.GET_FRIENDS:
            friends = action.friends;
            newUserFriendsState = Object.assign({}, state, { friends: friends });
            return newUserFriendsState;
        case UserApiUtil.DELETE_FRIENDS: 
            friends = action.friends;
            newUserFriendsState = Object.assign({}, state, { friends: friends });
            return newUserFriendsState;
        case UserApiUtil.ADD_FRIENDS: 
            friends = action.friends;
            newUserFriendsState = Object.assign({}, state, { friends: friends });
            return newUserFriendsState;
        default:
            return state;
    }
};

export default userFriendsReducer;