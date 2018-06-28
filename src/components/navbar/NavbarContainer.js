import {connect} from "react-redux";

import Navbar from "./Navbar";

export const mapStateToProps = state => {
    /**
     * state is redux global store
     */
    return {};
}

export const mapDispatchToProps = dispatch => {
    /**
     * dispatch refers to functions from actions
     * bind with reducer
     */
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);