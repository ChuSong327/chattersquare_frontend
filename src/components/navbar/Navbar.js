import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";
import SignInFormContainer from "../signinform/SignInFormContainer";
import { styles } from "./style";
 
class Navbar extends Component{
    render(){
        const { classes } = this.props;
        return (
            <div className={ classes.root }>
                <AppBar className={ classes.appbar }>
                    <Toolbar className={ classes.toolbar }>
                        <Link to="/" style={{textDecoration: "none", flexShrink: 2}}>
                            <Typography type="text" className={ classes.title }>ChatterSquare</Typography>
                        </Link>
                        <SignInFormContainer />
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
};

export default withStyles(styles, { withTheme: true })(Navbar);