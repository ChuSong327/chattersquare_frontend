import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import SignInForm from "./SignInForm";

export const mapStateToProps = state => {
    /**
     * state is redux global store
     */
    return {
        user: state.currentUserReducer.user
    };
};

export const mapDispatchToProps = dispatch => {
    /**
     * dispatch refers to functions from actions
     * bind with reducer
     */
    return {
        signIn: (params) => {
            return dispatch(userAction.signIn(params));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);