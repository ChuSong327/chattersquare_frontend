import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import SignUpForm from "./SignUpForm";

export const mapStateToProps = state => {
    /**
     * state is redux global store
     */
    return {
        user: state.currentUserReducer.user
    };
}

export const mapDispatchToProps = dispatch => {
    /**
     * dispatch refers to functions from actions
     * bind with reducer
     */
    return {
        signUp: (params) => {
            return dispatch(userAction.signUp(params));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);