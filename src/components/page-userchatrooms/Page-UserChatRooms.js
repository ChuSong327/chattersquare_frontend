import React, { Component } from "react";
import SideBarContainer from "../sidebar/SideBarContainer";
import DashboardContainer from "../dashboard/DashboardContainer";
import { LinearProgress } from "@material-ui/core";

class PageUserChatRooms extends Component {
    componentDidMount(){
        const params = JSON.parse(localStorage.currentUser)[0].id;
        this.props.retrieveUser(params);
        this.props.getRooms(params);
    }
    
    render(){
        if(!this.props.currentUser || !this.props.rooms) {
            return(
                <div>
                    <LinearProgress />
                </div>
            )
        } else if(this.props.currentUser && this.props.rooms) {
            return(
                <div>
                    <SideBarContainer state={ this.props } />
                    <DashboardContainer state={ this.props } tab={ 0 }/>
                </div>
            )
        }
    }
};

export default PageUserChatRooms;