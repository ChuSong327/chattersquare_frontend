import React, { Component } from "react";
import SideBarContainer from "../sidebar/SideBarContainer";
import DashboardContainer from "../dashboard/DashboardContainer";
import { LinearProgress } from "@material-ui/core";

class PageUserSetting extends Component {
    componentDidMount(){
        if(!localStorage.length) {
            this.props.history.push("/")
        } else {
            const params = JSON.parse(localStorage.user_id);
            this.props.retrieveUser(params);
        }
    };
    render() {
        if(!this.props.currentUser) {
            return (
                <div>
                    <LinearProgress/>
                </div>
            )
        } else if (this.props.currentUser) {
            return(
                <div>
                    <SideBarContainer state={ this.props }/>
                    <DashboardContainer tab={ 2 } state={ this.props }/>
                </div>
            )
        }
    }
};

export default PageUserSetting;