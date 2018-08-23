export const styles = theme => ({
    root: {
        height: "100%",
        paddingTop: theme.spacing.unit * 7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing.unit * 3
        },
    },
    avatarButton: {
        borderRadius: "50%",
        height: 100,
        width: 100,
        [theme.breakpoints.down("xs")]: {
            height: 50,
            width: 50,
        },
    },
    avatarInput: {
        display: "none"
    },
    avatar: {
        height: 100,
        width: 100,
        cursor: "pointer",
        zIndex:"1",
        "&:hover": {
            opacity: "0.8"
        },
        [theme.breakpoints.down("xs")]: {
            height: 70,
            width: 70,
        },
    },
    change:{
        transition: ".5s ease",
        opacity: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign:"center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing.unit * 3,
    },
    formControl: {
        margin: theme.spacing.unit * 6,
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing.unit * 1,
            width: "80%",
        },
        [theme.breakpoints.up("sm")]: {
            margin: theme.spacing.unit * 2,
        },
    },
    inputLabel: {
        color: "#BDBDBD",
        [theme.breakpoints.down("xs")]: {
           fontSize: "0.8rem"
        },
    },
    input: {
        "&:after": {
            borderBottomColor: theme.palette.secondary.main,
            borderBottomWidth: "1px"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem",
            width: "100%"
         },
    },
    button: {
        marginTop: theme.spacing.unit * 5,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        "&:after": {
            border: "none"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.6rem",
            marginTop: theme.spacing.unit * 3,
         },
    }
});