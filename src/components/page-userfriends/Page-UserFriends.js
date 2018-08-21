import React, { Component } from "react";
import SideBarContainer from "../sidebar/SideBarContainer";
import DashboardContainer from "../dashboard/DashboardContainer";
import { LinearProgress } from "@material-ui/core";

class PageUserFriends extends Component {
    componentDidMount(){
        const params = JSON.parse(localStorage.user_id);
        this.props.retrieveUser(params);
        this.props.getFriends(params);
    };

    render(){
        if(!this.props.currentUser || !this.props.friends) {
            return(
                <div>
                    <LinearProgress/>
                </div>
            )
        } else if (this.props.currentUser && this.props.friends) {
            return(
                <div>
                    <SideBarContainer state={ this.props }/>
                    <DashboardContainer state={ this.props } tab={ 1 }/>
                </div>
            )
        }
    }
};

export default PageUserFriends;