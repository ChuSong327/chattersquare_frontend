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
        [theme.breakpoints.down("xs")]:{
            margin: theme.spacing.unit,
            alignItems: "flex-start",
        },
    },
    card: {
        height: "auto",
        width: "100%",
        boxShadow: "none",
        marginBottom: theme.spacing.unit * 2,
        [theme.breakpoints.down("xs")]:{
            height: theme.spacing.unit * 12,
        },
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",
        [theme.breakpoints.down("xs")]:{
            flexDirection: "column",
            justifyContent:"flex-start",
            alignItems: "flex-start",
        }
    },
    mainInfo: {
        display: "flex",
        flexDirection: "row",
    },
    avatar: {
        height: 55,
        width: 55,
        [theme.breakpoints.down("xs")]:{
            height: 30,
            width: 30,
        },
    },
    userName: {
        fontSize: "1.2rem",
        paddingTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.8rem",
            padding: 0,
            marginLeft: theme.spacing.unit
        },
    },
    userInfo: {
        paddingTop: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 8,
        width: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.down("xs")]:{
            flexDirection: "column",
            alignItems:"flex-start",
            paddingLeft: theme.spacing.unit * 3
        },
    },
    contact: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: theme.spacing.unit,
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.8rem"
        },
    },
    emailAndPhone: {
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.6rem"
        }
    },
    icon: {
        color: "#BDBDBD",
        fontSize: "1.1rem",
        paddingTop: theme.spacing.unit * 0.3,
        marginRight: theme.spacing.unit * 1.2,
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.7rem"
        },
    },
    iconChat:{
        color: "#4DB6AC", 
        cursor: "pointer",
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.7rem",
            padding: 0
        },
    },
    iconDelete: {
        color: "#E57373", 
        marginLeft: theme.spacing.unit * 2, 
        cursor:"pointer",
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.7rem",
            padding: 0
        },
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