import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
    Typography,
    AppBar,
    Toolbar,
    Tab,
    Tabs,
} from "@material-ui/core";

import UserChatRoomsContainer from "../userchatrooms/UserChatRoomsContainer";
import UserFriendsContainer from "../userfriends/UserFriendsContainer";
import UserSettingContainer from "../usersetting/UserSettingContainer";

const drawerWidth = 260;

function TabContainer(props){
    return(
        <div style={{ marginLeft: 0, paddingTop: "70px", width: "100%", height:"100%", positino: "relative"}}>
            { props.children }
        </div>
    )
};

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

const styles = theme => ({
    root: {
        marginLeft: `calc(${drawerWidth}px)`,
        position: "absolute",
        overflow: "hidden",
        width: `calc(100% - ${drawerWidth}px)`
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`,
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
        fontWeight: 300
    },
    tabContent: {
        letterSpacing: "1.2px"
    },
    tabContainer: {
        marginLeft: drawerWidth,
        marginTop: "200px",
        width: "100%"
    }
});

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.tab,
        };
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    render(){
        const { classes } = this.props;
        const { value } = this.state;
        return(
            <div className={ classes.root }>
                <AppBar className={ classes.appbar}>
                    <Toolbar className={ classes.toolbar }>
                        <Typography variant="title" className={ classes.title }>Dashboard</Typography>
                        <div>
                            <Tabs value={ this.state.value } onChange={ this.handleTabChange }>
                                <Tab label="My Chatrooms" component={ NavLink } to={`/users/${this.props.state.currentUser.id}/dashboard/chatrooms`} className={ classes.tabContent }/>
                                <Tab label="My Friends" component={ NavLink } to={`/users/${this.props.state.currentUser.id}/dashboard/friends`} className={ classes.tabContent }/>
                                <Tab label="Setting" component={ NavLink } to={`/users/${this.props.state.currentUser.id}/dashboard/setting`} className={ classes.tabContent }/>
                            </Tabs>
                        </div>
                    </Toolbar>
                </AppBar>
                {value === 0 && <TabContainer><UserChatRoomsContainer state={ this.props.state} /></TabContainer>} 
                {value === 1 && <TabContainer><UserFriendsContainer state={ this.props.state } /></TabContainer>}
                {value === 2 && <TabContainer><UserSettingContainer state={ this.props.state }/></TabContainer>}
            </div>
        )
    }
};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(Dashboard);

