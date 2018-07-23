import React, { Component } from "react";
import SideBarContainer from "../sidebar/SideBarContainer";
import ChatRoomNav from "../chatroomnav/ChatRoomNav";
import { LinearProgress } from "@material-ui/core";

class PageChatRoomMessages extends Component {
    componentDidMount(){
        const params = JSON.parse(localStorage.currentUser)[0].id;
        const room_id = localStorage.currentRoom_id;
        this.props.retrieveUser(params);
        this.props.retrieveCurrentRoom(room_id);
        this.props.getRoomMessages(room_id);
    };

    render(){
        if(!this.props.currentUser || !this.props.currentRoom || this.props.messages.length === 0 ) {
            return(
                <div>
                   <LinearProgress/>
                </div>
            )
        } else if(this.props.currentUser && this.props.currentRoom && this.props.messages.length !== 0) {
            return(
                <div>
                    <SideBarContainer state={ this.props }/>
                    <ChatRoomNav state={ this.props } tab={ 0 }/>
                </div>
            )
        }
    }
};

export default PageChatRoomMessages;