import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";
import { styles } from "./style";
 

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