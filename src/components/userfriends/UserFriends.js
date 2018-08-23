import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    Card,
    Typography,
    Avatar,
} from "@material-ui/core";
import {
    Email,
    Phone,
    ChatBubble,
    Delete
} from "@material-ui/icons";

import { styles } from "./style";

class UserFriends extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleDelete(event){
        const params = {
            user_id: this.props.state.currentUser.id,
            friend_id: event.currentTarget.id
        };
        this.props.state.deleteFriends(params);
    };

    render(){
        const { classes, theme } = this.props;
        const  { friends }  = this.props.state;
        return (
            <div className={ classes.root }>
                {friends.map((friend, index) => {
                    const name = friend.firstname + " " + friend.lastname
                    const id = friend.id;
                    return (
                        <Card 
                            key={ index }
                            className={ classes.card }>
                            <div className={ classes.content }>
                                <div className={ classes.mainInfo }>
                                    <Avatar 
                                        src={ friend.profile } 
                                        className={ classes.avatar }/>
                                    <Typography className={ classes.userName }>
                                                { name }
                                    </Typography> 
                                </div>
                                <div className={ classes.userInfo }>
                                    <div className={ classes.contact }>   
                                        <Email className={ classes.icon }></Email> 
                                        <Typography className={ classes.emailAndPhone }>
                                            { friend.email }
                                        </Typography>
                                    </div>
                                    <div className={ classes.contact }>
                                        <Phone className={ classes.icon }></Phone>
                                        <Typography className={ classes.emailAndPhone }>
                                            { friend.phone }
                                        </Typography>
                                    </div>
                                    <div>
                                        <ChatBubble className={ classes.iconChat}/>
                                        <Delete 
                                            component="button"
                                            className={ classes.iconDelete}
                                            id={ id }
                                            onClick={ this.handleDelete }
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>
        )
    }
};

export default withStyles(styles, { withTheme: true })(UserFriends);