import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import PageUserSetting from "./Page-UserSetting";

export const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer.currentUser[0]
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        retrieveUser: params => {
            return dispatch(userAction.retrieveUser(params));
        },
        updateUserInfo: params => {
            return dispatch(userAction.updateUserInfo(params));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageUserSetting);