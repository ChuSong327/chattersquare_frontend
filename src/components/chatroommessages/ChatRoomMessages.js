import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    Card,
    Typography,
    Avatar,
    FormControl,
    Input,
} from "@material-ui/core";
import Moment from "react-moment";

import { styles } from "./style";

class ChatRoomMessages extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: this.props.state.currentUser.id,
            room_id: this.props.state.currentRoom.id,
            content: "",
            created_at: new Date()
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEnterKeyUp = this.handleEnterKeyUp.bind(this);
    };

    handleInputChange(event){
       this.setState({
           content: event.target.value
       })
    };

    handleEnterKeyUp(event){
        if(event.keyCode === 13) {
            const params = this.state;
            this.props.state.postRoomMessages(params);
            this.setState({
                content: ""
            })
        }
    };

    render(){
        const { classes } = this.props;
        const { messages } = this.props.state;
        return (
            <div className={ classes.chatContainer }>
                <div className={ classes.displaySection }>
                    {messages.map((message, index) => {
                        const { content, created_at } = message.content;
                        const user = message.user[0];
                        const name = user.firstname + " " + user.lastname;
                        const profile = user.profile;
                        return (
                            <Card 
                                key={ index }
                                className={ classes.messageContainer }>
                                <Avatar 
                                    src={ profile }
                                    className={ classes.avatar }/>
                                <div className={ classes.message }>
                                    <div>
                                        <Typography className={ classes.userName }> { name }</Typography>
                                        <Typography className={ classes.timeStamp }>
                                            <Moment fromNow>{ created_at }</Moment>
                                        </Typography>
                                    </div>
                                    <Typography className={ classes.content }>{ content }</Typography><br/>
                                </div>
                            </Card>
                        )
                    })}
                </div>
                <div className={ classes.inputContainer }>
                    <FormControl className={ classes.formControl }>
                        <Input
                            className={ classes.input }
                            placeholder="Message"
                            name="content"
                            value={ this.state.content }
                            onChange={ this.handleInputChange }
                            onKeyUp={ this.handleEnterKeyUp }/>
                    </FormControl>
                </div>
            </div>
        )
    }
};

export default withStyles(styles, { withTheme: true })(ChatRoomMessages);