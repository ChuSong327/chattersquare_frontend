import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import NavbarContainer from "../navbar/NavbarContainer";
import SignUpFormContainer from "../signupform/SignUpFormContainer";

const styles = theme => ({
    layer1: {
        minHeight: "100vh",
        background: "linear-gradient(to top right,  #5f2c82, #49a09d)"
    }
});

class MainPage extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div className={ classes.layer1 }>
                <NavbarContainer/>
                <SignUpFormContainer/>
            </div>
        )
    }
};

export default withStyles(styles)(MainPage);

