import * as UserApiUitl from "../utils/userUtil";

const defaultUserState = Object.freeze({
    currentUser: [],
});

const currentUserReducer = (
    state = defaultUserState, action
) => {
    Object.freeze(state);
    let currentUser;
    let newUserState;
    switch (action.type){
        case UserApiUitl.SIGN_IN:
            currentUser = action.currentUser;
            newUserState = Object.assign({}, state, { currentUser: currentUser });
            return newUserState;
        case UserApiUitl.SIGN_UP:
            currentUser = action.currentUser;
            newUserState = Object.assign({}, state, { currentUser: currentUser });
            return newUserState;
        case UserApiUitl.UPDATE_USER_INFO:
            currentUser = action.currentUser;
            newUserState = Object.assign({}, state, { currentUser: currentUser });
            return newUserState;
        case UserApiUitl.RETRIEVE_USER:
            currentUser = action.currentUser;
            newUserState = Object.assign({}, state, { currentUser: currentUser });
            return newUserState;
        default:
            return state;
    }
};

export default currentUserReducer;