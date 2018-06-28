import * as UserApiUtil from "../utils/userUtil";

/**
 * for reducer
 */
export const updateUsers = (users) => {
    return {
        type: UserApiUtil.GET_USERS,
        users
    };
};

/**
 * for UI
 */
export const getUsers = () => {
    return (dispatch) => {
        return UserApiUtil.getUsers().then(users => {
            dispatch(updateUsers(users));
        })
    }
}