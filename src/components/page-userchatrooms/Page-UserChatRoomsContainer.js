import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import * as chatRoomAction from "../../actions/chatRoomAction";
import PageUserChatRooms from "./Page-UserChatRooms";

export const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer.currentUser[0],
        rooms: state.userRoomsReducer.rooms,
        allRooms: state.allRoomsReducer.allRooms
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        retrieveUser: params => {
            return dispatch(userAction.retrieveUser(params));
        },
        getRooms: (params) => {
            return dispatch(userAction.getRooms(params));
        },
        getAllRooms: () => {
            return dispatch(chatRoomAction.getAllRooms());
        },
        joinRoom: params => {
            return dispatch(userAction.joinRoom(params));
        },
        removeRoom: params => {
            return dispatch(userAction.removeRoom(params));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageUserChatRooms);