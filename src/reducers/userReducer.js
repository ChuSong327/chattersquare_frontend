import * as UserApiUitl from "../utils/userUtil";

const defaultUserState = Object.freeze({
    users: [],
    user: {}
})

const userReducer = (
    state = defaultUserState, action
) => {
    Object.freeze(state);
    switch (action.type){
        case UserApiUitl.GET_USERS:
            const users = action.users;
            const newUserState = Object.assign({}, state, {users: users});
            return newUserState;
        default:
            return state;
    }
}


export default userReducer;