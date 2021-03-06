export const styles = theme => ({
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
        flexDirection: "row",
        [theme.breakpoints.down("xs")]:{
            marginLeft: theme.spacing.unit,
        }
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
        cursor: "pointer",
        [theme.breakpoints.down("xs")]:{
            fontSize:"0.8rem"
        }
    },
    timeStamp: {
        color: "#afaeae",
        marginLeft: theme.spacing.unit,
        marginTop: "3px",
        fontSize: "0.8rem",
        display: "inline-block",
        [theme.breakpoints.down("xs")]:{
            fontSize:"0.7rem"
        }
    },
    content: {
        fontSize: "1rem",
        marginTop: theme.spacing.unit,
        [theme.breakpoints.down("xs")]:{
            fontSize:"0.8rem"
        }
    },
    avatar:{
        cursor: "pointer",
        [theme.breakpoints.down("xs")]:{
            height: 30,
            width: 30
        }
    },
    inputContainer: {
        bottom: 0,
        right: 0,
        left: 0,
        height: theme.spacing.unit * 5,
        width: `calc(100% - 260px)`,
        marginLeft:"260px",
        overFlow: "hidden",
        backgroundColor: "rgb(255,255,255)",
        paddingBottom: theme.spacing.unit * 3,
        position: "fixed",
        [theme.breakpoints.down("xs")]:{
            paddingBottom: theme.spacing.unit,
            width: `calc(100% - 120px)`,
            marginLeft:"120px",
        }
    },
    formControl: {
        width: "calc(100% - 32px)",
        marginLeft: theme.spacing.unit,
    },
    input: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#757575",
        borderRadius: "3px",
        width: "100%",
        height: theme.spacing.unit * 4.5,
        "&:after": {
            borderBottomColor: theme.palette.primary.contrastText,
            borderBottomWidth: "0.6px"
        },
        padding: "7px",
        [theme.breakpoints.down("xs")]:{
            height: theme.spacing.unit * 3,
            fontSize: "0.8rem",
        }
    }
});