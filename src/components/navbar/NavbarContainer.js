import { connect } from "react-redux";
import Navbar from "./Navbar";

export const mapStateToProps = state => {
    /**
     * state is redux global store
     */
    return {
        // user: state.currentUserReducer.user
    };
};

export const mapDispatchToProps = dispatch => {
    /**
     * dispatch refers to functions from actions
     * bind with reducer
     */
    return {
        // getCurrentUser: (params) => {
        //     return dispatch(userAction.getCurrentUser(params));
        // }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);