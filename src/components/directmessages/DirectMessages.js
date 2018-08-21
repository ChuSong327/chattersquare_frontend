import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";

const drawerWidth = 260;

const styles = theme => ({
    root: {
        marginLeft: "calc(120px)",
        position: "relative",
        overflow: "hidden",
        display: "flex",

    },
    appbar: {
        width: `calc(100% - 120px)`,
        marginLeft: drawerWidth,
        background: "linear-gradient(to right,  #5f2c82, #49a09d)",
        position: "fixed"
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        color: theme.palette.primary.contrastText,
        letterSpacing: "1px",
        fontWeight: 300,
        marginLeft: drawerWidth,

    }
});
class DirectMessages extends Component {

    render(){
        const { classes } = this.props;
        const name = this.props.state.currentUser.firstname + " " + this.props.state.currentUser.lastname
        return(
            <div>
                <div className={ classes.root }>
                    <AppBar className={ classes.appbar}>
                        <Toolbar className={ classes.toolbar }>
                            <Typography variant="title" className={ classes.title }>In developing process...</Typography>
                        </Toolbar>
                    </AppBar>
                    
                </div>
            </div>
        )
    };
};

export default withStyles(styles)(DirectMessages);