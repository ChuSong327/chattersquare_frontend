import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import PageUserFriends from "./Page-UserFriends";

export const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer.currentUser[0],
        friends: state.userFriendsReducer.friends
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getFriends: (params) => {
            return dispatch(userAction.getFriends(params));
        },
        retrieveUser: params => {
            return dispatch(userAction.retrieveUser(params));
        },
        deleteFriends: (params) => {
            return dispatch(userAction.deleteFriends(params));
        } 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageUserFriends);  