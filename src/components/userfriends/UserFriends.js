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
} from "@material-ui/icons"

const styles = theme => ({
    root:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        marginTop: theme.spacing.unit * 5,
        marginLeft: theme.spacing.unit * 5,
    },
    card: {
        height: theme.spacing.unit * 12,
        width: "100%",
        boxShadow: "none",
        marginBottom: theme.spacing.unit * 2
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap"
    },
    mainInfo: {
        width: theme.spacing.unit * 35,
        display: "flex",
        flexDirection: "row",
    },
    avatar: {
        height: 55,
        width: 55,
    },
    userName: {
        fontSize: "1.2rem",
        paddingTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2
    },
    userInfo: {
        paddingTop: theme.spacing.unit,
        width: theme.spacing.unit * 65,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contact: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: theme.spacing.unit
    },
    icon: {
        color: "#BDBDBD",
        fontSize: "1.1rem",
        paddingTop: theme.spacing.unit * 0.3,
        marginRight: theme.spacing.unit * 1.2
    },
    button: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        "&:after": {
            border: "none"
        }
    }
});

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
                                        <Typography >
                                            { friend.email }
                                        </Typography>
                                    </div>
                                    <div className={ classes.contact }>
                                        <Phone className={ classes.icon }></Phone>
                                        <Typography>
                                            { friend.phone }
                                        </Typography>
                                    </div>
                                    <div>
                                        <ChatBubble style={{ color: "#4DB6AC", cursor: "pointer" }}/>
                                        <Delete 
                                            component="button"
                                            style={{ color: "#E57373", marginLeft: theme.spacing.unit * 2, cursor:"pointer" }}
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