import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";
import SignInFormContainer from "../signinform/SignInFormContainer";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "inherit", 
        boxShadow:"none",
        position: "fixed",
        top: 0,
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            justifyContent:"flex-start",
        },
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem",
            marginRight: theme.spacing.unit
        },
        marginRight: "auto",
        marginLeft: "auto",
        textDecoration: "none",
        fontSize: "1.1rem",
        letterSpacing: theme.spacing.unit * 0.2,
        color: theme.palette.primary.contrastText
    }
});

class Navbar extends Component{
    render(){
        console.log(this.props.theme.breakpoints.down)
        console.log(this.props.theme.breakpoints)
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