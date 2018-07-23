import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography,
    Tab,
    Tabs,
} from "@material-ui/core";
import ChatRoomMessagesContainer from "../chatroommessages/ChatRoomMessagesContainer";
import ChatRoomUsersContainer from "../chatroomusers/ChatRoomUsersContainer";


const drawerWidth = 260;

function TabContainer(props){
    return(
        <div>
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
    tabContainer: {
        marginLeft: drawerWidth,
        marginTop: "200px",
        width: "100%"
    },
    
});

class ChatRoomNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.tab,
        };
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes} = this.props
        const { value } = this.state;
        const { currentRoom, currentUser } = this.props.state;
        return (
            <div className= {classes.root} >
                <AppBar className={ classes.appbar }>
                    <Toolbar className={ classes.toolbar }>
                        <Typography variant="title" className={ classes.title }>{ currentRoom.name }</Typography>
                        <div>
                            <Tabs value={ this.state.value } onChange={ this.handleTabChange }>
                                <Tab label="Messages" component={ NavLink } to={`/chatrooms/user/${ currentUser.id }/chatroom/${ currentRoom.id }/messages`} className={ classes.tabContent }/>
                                <Tab label="Users" component={ NavLink } to={`/chatrooms/user/${ currentUser.id }/chatroom/${ currentRoom.id }/users`} className={ classes.tabContent }/>
                            </Tabs>
                        </div>
                    </Toolbar>
                </AppBar>
                <div >   
                    {value === 0 && <TabContainer><ChatRoomMessagesContainer state={ this.props.state }/></TabContainer>} 
                    {value === 1 && <TabContainer><ChatRoomUsersContainer state={ this.props.state }/></TabContainer>}
                </div>
            </div>
        )
    }
};

ChatRoomNav.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(ChatRoomNav);