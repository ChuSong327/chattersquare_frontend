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
import { styles } from "./style";


function TabContainer(props){
    return(
        <div style={{ marginLeft: 0, paddingTop: "70px", width: "100%", position: "relative"}}>
            { props.children }
        </div>
    )
};

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};


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
                                <Tab 
                                    label={<span className={ classes.tabLabel}>Chatrooms</span>} 
                                    component={ NavLink } to={`/users/${this.props.state.currentUser.id}/dashboard/chatrooms`} 
                                    className={ classes.tabContent }/>
                                <Tab 
                                    label={<span className={ classes.tabLabel}>Friends</span>} 
                                    component={ NavLink } to={`/users/${this.props.state.currentUser.id}/dashboard/friends`} 
                                    className={ classes.tabContent }/>
                                <Tab 
                                    label={<span className={ classes.tabLabel}>Setting</span>} 
                                    component={ NavLink } to={`/users/${this.props.state.currentUser.id}/dashboard/setting`} 
                                    className={ classes.tabContent }/>
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

