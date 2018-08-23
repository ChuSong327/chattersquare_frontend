import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import NavbarContainer from "../navbar/NavbarContainer";
import SignUpFormContainer from "../signupform/SignUpFormContainer";
import { styles } from "./style";

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

