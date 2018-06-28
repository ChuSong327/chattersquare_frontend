import { connect } from "react-redux";
import * as roomsActions from "../../actions/roomsAction";
import Rooms from "./Rooms";

export const mapStateToProps = state => {
    return {
        rooms: state.roomsReducer.rooms
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getRooms: () => {
            return dispatch(roomsActions.getRooms());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);