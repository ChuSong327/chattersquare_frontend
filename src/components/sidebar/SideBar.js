import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { 
    Drawer,
    Avatar, 
    Button,
    List, 
    ListItem, 
    ListItemText,
    Typography,
} from "@material-ui/core";
import {
    ExpandMore,
    ExpandLess
} from "@material-ui/icons";

const drawerWidth = 260;

const styles = theme => ({
    drawerPaper: {
        position: "fixed",
        width: drawerWidth,
        height: "100%",
        background: "linear-gradient(to bottom, #232526, #414345)"
    },
    userSection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: theme.spacing.unit * 5,
        marginLeft: 25,
        marginBottom: 20,
        alignItems: "center"
    },
    userName: {
        color: "rgb(255,255,255)",
        marginLeft: theme.spacing.unit * 2,
        fontSize: "1rem",
        letterSpacing:"1px"
    },
    avatar: {
        width: 60,
        height: 60,
    },
    item: {
        height: theme.spacing.unit * 6,
        "&:hover":{
            background: "#49a09d"
        },
    },
    itemText: {
        color: "#ffffff",
        letterSpacing: "1px",
        fontSize: "0.9rem"
    },
    logOut: {
        color: "#ffffff",
        letterSpacing: "1px",
        fontSize: "0.7rem",
        height: theme.spacing.unit * 5,
        width: theme.spacing.unit * 6,
        marginLeft: theme.spacing.unit * 12,
        marginTop: theme.spacing.unit * 10,
        "&:hover":{
            background: "#49a09d",
        },
    }
});

class SideBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
        this.handleExpandClick = this.handleExpandClick.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    };

    handleExpandClick(){
        this.setState({
            open: !this.state.open
        })
    };

    handleLogOut(){
        localStorage.clear();
    };

    render(){
        const { classes } = this.props;
        const { currentUser } = this.props.state;
        return(
            <div>
                <Drawer 
                    variant="permanent" 
                    classes={{ paper: classes.drawerPaper }}>
                    <div className={ classes.userSection }>
                        <Avatar className={ classes.avatar } src={ currentUser.profile }/>
                        <Typography className={ classes.userName }>
                            { `${ currentUser.firstname } ${ currentUser.lastname }`}
                        </Typography>
                    </div>
                    <List component="nav">
                        <ListItem 
                            button 
                            component={ NavLink } 
                            to={`/users/${ currentUser.id }/dashboard/chatrooms`}
                            onClick={ this.handleDashboardClick } 
                            className={ classes.item }>
                            <ListItemText 
                                classes={{ primary: classes.itemText }} 
                                primary="Dashboard" 
                            />
                        </ListItem>
                        <ListItem 
                            button 
                            component={ NavLink } 
                            to={`/users/${ currentUser.id }/directmessages`}
                            onClick={ this.handleDirectMessageClick } 
                            className={ classes.item }>
                            <ListItemText 
                                classes={{ primary: classes.itemText }} 
                                primary="Direct Messages"
                            />
                            <Button 
                                onClick={ this.handleExpandClick } 
                                size="small">
                                { this.state.open ? <ExpandMore/> : <ExpandLess/> }
                            </Button>
                        </ListItem>
                    </List>
                    <Button 
                        component={ NavLink }
                        to="/"
                        size="small"
                        onClick={ this.handleLogOut }
                        className={ classes.logOut }>
                        Logout
                    </Button>
                </Drawer>
            </div>
        ) 
    }
};

SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideBar);