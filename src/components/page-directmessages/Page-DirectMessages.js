import React, { Component } from "react";
import SideBarContainer from "../sidebar/SideBarContainer";
import DirectMessagesContainer from "../directmessages/DirectMessagesContainer";

class PageDirectMessages extends Component {
    componentDidMount(){
        const params = JSON.parse(localStorage.currentUser)[0].id;
        this.props.retrieveUser(params); 
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