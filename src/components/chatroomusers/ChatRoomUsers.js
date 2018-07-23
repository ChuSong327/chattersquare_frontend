import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
    Card,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    IconButton
} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
    usersContainer: {
        marginTop: theme.spacing.unit * 10,
        marginLeft: theme.spacing.unit * 5,
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        flexWrap: "wrap",
    },
    card: {
        display:"flex",
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems: "center",
        boxShadow: "none",
        height: theme.spacing.unit * 12,
        width: theme.spacing.unit * 26,
    },
    userName: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 2.5,
        display: "inline-block"
    },
    button: {
        color: "#BDBDBD"
    },
});

class ChatRoomUsers extends Component {
    constructor(props){
        super(props);
        this.state = {
            anchorEl: null,
            user_id: ""
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleAddFriend = this.handleAddFriend.bind(this);
    };

    handleButtonClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
            user_id: event.currentTarget.id
        })
    };

    handleAddFriend(event) {
        this.setState({
            anchorEl: null
        })
        const friend_id = this.state.user_id;
        const user_id = this.props.state.currentUser.id;
        let params = {
            friend_id,
            user_id
        };
        this.props.state.addFriends(params);
    }

    render(){
        const { classes, theme } = this.props;
        const { users } = this.props.state;
        const { anchorEl } = this.state;
        return(
            <div className={ classes.usersContainer }>
                {users.map((user, index) => {
                    const { firstname, lastname, profile, id } = user;
                    return (
                        <Card 
                            key={ index }
                            className={ classes.card }>
                            <Avatar 
                                src={ profile }
                                style={{ 
                                    cursor: "pointer", 
                                    height: theme.spacing.unit * 6, 
                                    width: theme.spacing.unit * 6 
                                }} 
                            />
                            <div>
                                <Typography 
                                    style={{ cursor: "pointer" }}
                                    className={ classes.userName }>
                                    {`${firstname} ${lastname}`}
                                </Typography>
                                <IconButton
                                    id={ id }
                                    aria-label="More"
                                    aria-owns={ anchorEl ? "long-menu" : null }
                                    aria-haspopup="true"
                                    onClick={ this.handleButtonClick }
                                    componnet="span"
                                    size="small">
                                    <MoreVertIcon className={ classes.button }/>
                                </IconButton>
                            </div>
                            <Menu
                                id="long-menu"
                                anchorEl={ anchorEl }
                                open={ Boolean(anchorEl) }
                                onClose={ this.handleAddFriend }
                                PaperProps={{
                                    style: {
                                        boxShadow: "1px 1.5px 1.5px -1px rgba(158, 158, 158, 0.5)"
                                    }}}>
                                <MenuItem
                                    id={ index }
                                    onClick={ this.handleAddFriend }>
                                    <Typography>View Profile</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={ this.handleAddFriend }>
                                    <Typography>Add Friend</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={ this.handlClose }>
                                    <Typography>Send Message</Typography>
                                </MenuItem>
                            </Menu>
                        </Card>
                    )
                })}
            </div>
        )
    }
};

export default withStyles(styles, { withTheme: true })(ChatRoomUsers);