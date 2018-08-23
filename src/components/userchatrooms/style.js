import React from "react";
import { Slide } from "@material-ui/core";

export const Transition = props => {
    return <Slide 
                direction="up" {...props} 
                style={{ 
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    paddingTop: "10%",
                    paddingLeft: "5%"
                }}
            />;
};

export const styles = theme => ({
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
        marginTop: theme.spacing.unit * 2,
        height: "100%",
    },
    card: {
        height: theme.spacing.unit * 40,
        width: theme.spacing.unit * 50,
        margin: theme.spacing.unit * 3,
        borderRadius:"20px",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover":{
            boxShadow: "5px"
        },
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            height: theme.spacing.unit * 15,
            width: theme.spacing.unit * 25,
        },
        [theme.breakpoints.up("sm")]: {
            height: theme.spacing.unit * 25,
            width: theme.spacing.unit * 35,
        },
    },
    image: {
        height: theme.spacing.unit * 25,
        paddingTop: theme.spacing.unit * 5,
        "&:hover": {
            opacity: "0.8"
        },
        [theme.breakpoints.down("xs")]: {
            height: "65%",
            paddingTop: 0,
        },
        [theme.breakpoints.up("sm")]: {
            height: "65%",
            paddingTop: 0,
        },
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
        fontSize: "1.1rem",
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