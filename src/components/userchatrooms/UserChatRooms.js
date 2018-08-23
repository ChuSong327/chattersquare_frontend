import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
    Card,
    Typography,
    CardMedia,
    Button,
    Dialog,
    Slide,
    IconButton,
    Menu,
    MenuItem
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { styles, Transition } from "./style";

class UserChatRooms extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
            room_id: ""
        }
        this.handleButtonClose = this.handleButtonClose.bind(this);
        this.handleButtonOpen = this.handleButtonOpen.bind(this);
        this.handleDialogRoomClick = this.handleDialogRoomClick.bind(this);
        this.handleVertButtonClick = this.handleVertButtonClick.bind(this);
        this.handleRemoveRoom = this.handleRemoveRoom.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleDialogRoomClick(event){
        const params = {
            user_id: this.props.state.currentUser.id,
            room_id: event.currentTarget.id
        };
        this.props.state.joinRoom(params);
    };

    handleButtonOpen(){
        this.setState({
            open: true
        });
        this.props.state.getAllRooms();
    };

    handleButtonClose(){
        this.setState({
            open: false
        })
    };

    handleVertButtonClick(event){
        this.setState({
            anchorEl: event.currentTarget,
            room_id: event.currentTarget.id,
        })
    };

    handleClose(){
        this.setState({
            anchorEl: null
        });
    };

    handleRemoveRoom(){
        this.setState({
            anchorEl: null
        });
        const params = {
            room_id: this.state.room_id,
            user_id: this.props.state.currentUser.id
        };
        this.props.state.removeRoom(params);
    };

    render(){
        const { classes } = this.props;
        const { rooms } = this.props.state;
        const { allRooms } = this.props.state;
        const { anchorEl } = this.state;
        return(
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <Button
                    variant="contained"
                    onClick={ this.handleButtonOpen }
                    className={ classes.openButton }>
                    View All Rooms
                </Button>
                <Dialog
                    fullScreen
                    open={ this.state.open }
                    onClose={ this.handleButtonClose }
                    TransitionComponent={ Transition }
                    component="div">
                    <div>
                        <CloseIcon 
                            onClick={ this.handleButtonClose }
                            className={ classes.closeButton }
                        />
                    </div>
                    <div className={ classes.dialog }>
                        {allRooms.map((room, index) => {
                            const { id, name, imageUrl } = room;
                            const user_id = this.props.state.currentUser.id;
                            return (
                                <div key={ index }>
                                    <Link to={`/chatrooms/user/${user_id}/chatroom/${id}/messages`}>
                                        <Card 
                                            id={ id }
                                            onClick={ this.handleDialogRoomClick }
                                            className={ classes.dialogCard }>
                                            <CardMedia
                                                image={ imageUrl }
                                                title="image"
                                                className={ classes.dialogImage }
                                            />
                                            <span className={ classes.backDrop }/>
                                            <div className={ classes.dialogTitleContainer }>
                                                <Typography component="span" className={ classes.dialogTitle }> 
                                                    { name } 
                                                </Typography>
                                            </div>
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </Dialog>
                <div className={ classes.root }>
                    {rooms.map((room, index) => {
                        const user_id = this.props.state.currentUser.id;
                        const room_id = rooms[index].id;
                        return(
                            <Card 
                                key={ index }
                                className={ classes.card }
                                >
                                <CardMedia
                                    image={ rooms[index].imageUrl }
                                    title="image"
                                    id={ room_id }
                                    onClick={ this.handleRoomClick }
                                    component={ NavLink }
                                    to={`/chatrooms/user/${user_id}/chatroom/${room_id}/messages`}  
                                    className={ classes.image }
                                />
                                <div className={ classes.titleAndButton }>
                                    <Typography 
                                        id={ room_id }
                                        onClick={ this.handleRoomClick }
                                        component={ NavLink }
                                        to={`/chatrooms/user/${user_id}/chatroom/${room_id}/messages`}  
                                        className={ classes.title }>
                                        { room.name }
                                    </Typography>
                                    <IconButton
                                        id={ room_id }
                                        aria-label="More"
                                        aria-owns={ anchorEl ? "long-menu" : null }
                                        aria-haspopup="true"
                                        onClick={ this.handleVertButtonClick }
                                        componnet="span"
                                        size="small"
                                        className={ classes.vertButton }>
                                        <MoreVertIcon />
                                    </IconButton>
                                </div>
                                <Menu
                                    id="long-menu"
                                    anchorEl={ anchorEl }
                                    open={ Boolean(anchorEl) }
                                    onClose={ this.handleClose }
                                    PaperProps={{
                                        style: {
                                            boxShadow: "1px 1.5px 1.5px -1px rgba(158, 158, 158, 0.5)"
                                        }}}>
                                    <MenuItem
                                        onClick={ this.handleRemoveRoom }>
                                        <Typography>Remove</Typography>
                                    </MenuItem>
                                </Menu>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }
};

export default withStyles(styles, { withTheme: true })(UserChatRooms);