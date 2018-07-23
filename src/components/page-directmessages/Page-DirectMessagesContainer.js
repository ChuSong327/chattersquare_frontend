import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import PageDirectMessages from "./Page-DirectMessages";

export const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer.currentUser[0]
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        retrieveUser: params => {
            return dispatch(userAction.retrieveUser(params));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageDirectMessages);