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

const drawerWidth = 260;

const styles = theme => ({
    chatContainer: {
        marginTop: theme.spacing.unit * 10,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    displaySection: {
        marginBottom: theme.spacing.unit * 5,
    },
    messageContainer: {
        marginLeft: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit,
        width: "90%",
        boxShadow: "none",
        display: "flex",
        flexDirection: "row"
    },
    message: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginLeft: theme.spacing.unit
    },
    userName: {
        fontSize: "0.9rem",
        color: theme.palette.primary.light,
        fontWeight: "bold",
        display: "inline-block",
        cursor: "pointer"
    },
    timeStamp: {
        color: "#afaeae",
        marginLeft: theme.spacing.unit,
        marginTop: "3px",
        fontSize: "0.8rem",
        display: "inline-block"
    },
    content: {
        fontSize: "1rem",
        marginTop: theme.spacing.unit
    },
    inputContainer: {
        bottom: 0,
        right: 0,
        left: `calc(${drawerWidth}px)`,
        height: theme.spacing.unit * 5,
        overFlow: "hidden",
        backgroundColor: "#ffffff",
        paddingBottom: theme.spacing.unit * 3,
        position: "fixed"
    },
    formControl: {
        width: `calc(100% - 65px)`,
        marginLeft: theme.spacing.unit * 3,
    },
    input: {
        borderStyle: "solid",
        borderWidth: "1.6px",
        borderColor: "#757575",
        borderRadius: "6px",
        width: "100%",
        height: theme.spacing.unit * 4.5,
        "&:after": {
            borderBottomColor: theme.palette.primary.contrastText,
            borderBottomWidth: "0.6px"
        },
        padding: "7px"
    }
});

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
                                    style={{ cursor: "pointer" }}/>
                                <div className={ classes.message }>
                                    <div>
                                        <Typography className={ classes.userName }> { name }</Typography>
                                        <Typography className={ classes.timeStamp }><Moment fromNow>{ created_at }</Moment></Typography>
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