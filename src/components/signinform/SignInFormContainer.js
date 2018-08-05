import { connect } from "react-redux";
import * as userAction from "../../actions/userAction";
import SignInForm from "./SignInForm";

export const mapStateToProps = state => {
    return {
        user: state.currentUserReducer.user
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        signIn: (params) => {
            return dispatch(userAction.signIn(params));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);