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


const Transition = props => {
    return <Slide 
                direction="up" {...props} 
                style={{ 
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    paddingTop: "10%",
                    paddingLeft: "5%"
                }}
            />;
};

const styles = theme => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            margin: 0
        },
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit * 5,
        },
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        marginLeft: theme.spacing.unit * 10,
        marginTop: theme.spacing.unit * 2
    },
    card: {
        [theme.breakpoints.down("xs")]: {
            height: theme.spacing.unit * 15,
            width: theme.spacing.unit * 25,
        },
        [theme.breakpoints.up("sm")]: {
            height: theme.spacing.unit * 25,
            width: theme.spacing.unit * 35,
        },
        height: theme.spacing.unit * 40,
        width: theme.spacing.unit * 50,
        margin: theme.spacing.unit * 3,
        borderRadius:"20px",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover":{
            boxShadow: "5px"
        },
        position: "relative"
    },
    image: {
        [theme.breakpoints.down("xs")]: {
            height: "65%",
            paddingTop: 0,
        },
        [theme.breakpoints.up("sm")]: {
            height: "65%",
            paddingTop: 0,
        },
        height: theme.spacing.unit * 25,
        paddingTop: theme.spacing.unit * 5,
        "&:hover": {
            opacity: "0.8"
        }
    },
    titleAndButton: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        [theme.breakpoints.down("xs")]: {
           fontSize: "0.8rem",
           paddingTop: theme.spacing.unit,
        },
        fontSize: "1.3rem",
        paddingLeft: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 3,
        "&:hover": {
            transform:"translateY(-1px)"
        },
        textDecoration: "none",
    },
    vertButton: {
        color: "#BDBDBD",
    },
    openButton: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.7rem",
            marginLeft: theme.spacing.unit * 2,
         },
        float: "left",
        marginLeft: theme.spacing.unit * 5,
        marginTop: theme.spacing.unit * 3,
        color: "#ffffff",
        fontWeight: 300,
        letterSpacing: "1px",
        backgroundColor:theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.light
        }
    },
    closeButton: {
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        display: "inline-block",
        cursor: "pointer"
    },
    dialog:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems:"center",
        flexWrap: "wrap"
    },
    dialogCard: {
        [theme.breakpoints.down("xs")]: {
            height: theme.spacing.unit * 15,
            width: theme.spacing.unit * 25,
            margin: theme.spacing.unit * 2,
        },
        [theme.breakpoints.up("sm")]: {
            height: theme.spacing.unit * 25,
            width: theme.spacing.unit * 35,
        },
        width: theme.spacing.unit * 40,
        margin: theme.spacing.unit * 5,
        borderRadius:"20px",
        cursor: "pointer",
        textDecoration: "none",
        position: "relative",
        "&:hover": {
            "& $dialogTitle" : {
                borderColor: "#ffffff",
                borderStyle: "solid",
                borderWidth: "1.5px",
                transform: "translateY(-10px)",
                transition: "0.3s ease"
            },
            "& $backDrop": {
                opacity: "0",
            },  
        }
    },
    dialogTitleContainer: {
        [theme.breakpoints.down("xs")]: {
            top: "38%",
            left:"23%",
        },
        position: "absolute",
        width: theme.spacing.unit * 13,
        height: theme.spacing.unit * 8,
        top: "45%",
        left:"35%",
        
    },
    dialogTitle: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem",
         },
        color: "#ffffff",
        textAlign: "center",
        fontSize: "1rem",
        letterSpacing: "1px",
        padding: theme.spacing.unit,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap", 
        overflow:"hidden", 
    },
    dialogImage: {
        height: theme.spacing.unit * 25,
        paddingTop: theme.spacing.unit * 5,
    },
    backDrop: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: "0.4",
        transition: theme.transitions.create("opacity"),
    },
});

class UserChatRooms extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
            room_id: ""
        }
        this.handleRoomClick = this.handleRoomClick.bind(this);
        this.handleButtonClose = this.handleButtonClose.bind(this);
        this.handleButtonOpen = this.handleButtonOpen.bind(this);
        this.handleDialogRoomClick = this.handleDialogRoomClick.bind(this);
        this.handleVertButtonClick = this.handleVertButtonClick.bind(this);
        this.handleRemoveRoom = this.handleRemoveRoom.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleRoomClick(event){
        localStorage.setItem("currentRoom_id", event.currentTarget.id);
    };

    handleDialogRoomClick(event){
        localStorage.setItem("currentRoom_id", event.currentTarget.id);
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

    handleRemoveRoom(event){
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