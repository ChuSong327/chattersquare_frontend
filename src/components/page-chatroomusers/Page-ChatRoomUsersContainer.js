import { connect } from "react-redux";
import * as chatRoomAction from "../../actions/chatRoomAction";
import * as userAction from "../../actions/userAction";
import PageChatRoomUsers from "./Page-ChatRoomUsers";

export const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer.currentUser[0],
        currentRoom: state.currentRoomReducer.currentRoom[0],
        messages: state.roomMessagesReducer.messages,
        users: state.roomUsersReducer.users,
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        retrieveUser: params => {
            return dispatch(userAction.retrieveUser(params));
        },
        retrieveCurrentRoom: params => {
            return dispatch(chatRoomAction.retrieveCurrentRoom(params));
        },
        getRoomUsers: params => {
           return dispatch(chatRoomAction.getRoomUsers(params));
       },
       addFriends: params => {
           return dispatch(userAction.addFriends(params));
       }
    } 
};

export default connect(mapStateToProps, mapDispatchToProps)(PageChatRoomUsers);