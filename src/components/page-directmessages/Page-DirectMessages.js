import React, { Component } from "react";
import SideBarContainer from "../sidebar/SideBarContainer";
import DirectMessagesContainer from "../directmessages/DirectMessagesContainer";

class PageDirectMessages extends Component {
    componentDidMount(){
        if(!localStorage.length) {
            this.props.history.push("/")
        } else {
            const params = JSON.parse(localStorage.user_id);
            this.props.retrieveUser(params); 
        }
    }

    render(){
        if(!this.props.currentUser) {
            return (
                <div>
                    Loading
                </div>
            )
        } else if (this.props.currentUser) {
            return(
                <div>
                    <SideBarContainer  state={ this.props }/>
                    <DirectMessagesContainer  state={ this.props }/>
                </div>
            )
        }
    }
};

export default PageDirectMessages;