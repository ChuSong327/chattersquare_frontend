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
import { styles } from "./style"; 
// import {
//     ExpandMore,
//     ExpandLess
// } from "@material-ui/icons";

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
                            {/* <Button 
                                onClick={ this.handleExpandClick } 
                                size="small">
                                { this.state.open ? <ExpandMore/> : <ExpandLess/> }
                            </Button> */}
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