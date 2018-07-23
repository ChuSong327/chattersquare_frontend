import React, { Component } from "react";
import SideBarContainer from "../sidebar/SideBarContainer";
import ChatRoomNav from "../chatroomnav/ChatRoomNav";

class PageChatRoomUsers extends Component {
    componentDidMount(){
        const params = JSON.parse(localStorage.currentUser)[0].id;
        const room_id = localStorage.currentRoom_id;
        this.props.retrieveUser(params);
        this.props.retrieveCurrentRoom(room_id);
        this.props.getRoomUsers(room_id);
    };
    render(){
        if(!this.props.currentUser || !this.props.currentRoom ) {
            return(
                <div>
                    Loading...
                </div>
            )
        } else if(this.props.currentUser && this.props.currentRoom ) {
            console.log("this is the chat users props: ", this.props)
            return(
                <div>
                    <SideBarContainer state={ this.props }/>
                    <ChatRoomNav state={ this.props } tab={ 1 }/>
                </div>
            )
        }
    }
};

export default PageChatRoomUsers;