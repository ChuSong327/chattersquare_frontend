import { connect } from "react-redux";
import * as chatRoomAction from "../../actions/chatRoomAction";
import * as userAction from "../../actions/userAction";
import PageChatRoomMessages from "./Page-ChatRoomMessages";

export const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer.currentUser[0],
        currentRoom: state.currentRoomReducer.currentRoom[0],
        messages: state.roomMessagesReducer.messages
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
        getRoomMessages: params => {
            return dispatch(chatRoomAction.getRoomMessages(params));
        },
        postRoomMessages: params => {
            return dispatch(chatRoomAction.postRoomMessages(params));
        }
    } 
};

export default connect(mapStateToProps, mapDispatchToProps)(PageChatRoomMessages);