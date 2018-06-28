import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";


const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    options: {
        marginRight: theme.spacing.unit * 2,
        color: "white"
    }
})
class Navbar extends Component{
    render(){
        const { classes } = this.props;
        return (
            <div >
                <AppBar className={ classes.root }>
                    <Toolbar>
                        <Button className={ classes.options }>Sign in </Button>
                        <Button className={ classes.options }> Sign up </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Navbar);