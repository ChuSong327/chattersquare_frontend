import { connect } from "react-redux";
import * as userActions from "../../actions/userAction";
import User from "./User";

export const mapStateToProps = state => {
    return {
        users: state.userReducer.users
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            return dispatch(userActions.getUsers());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);