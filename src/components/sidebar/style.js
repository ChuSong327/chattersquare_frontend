export const styles = theme => ({
    drawerPaper: {
        [theme.breakpoints.down("xs")]: {
            width: "120px",
        },
        position: "fixed",
        width: 260,
        height: "100%",
        background: "linear-gradient(to bottom, #232526, #414345)"
    },
    userSection: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "10px",
        },
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: theme.spacing.unit * 5,
        marginLeft: 25,
        marginBottom: 20,
        alignItems: "center"
    },
    userName: {
        [theme.breakpoints.down("xs")]: {
            fontSize:"0.8rem",
            marginLeft: theme.spacing.unit,
        },
        color: "rgb(255,255,255)",
        marginLeft: theme.spacing.unit * 2,
        fontSize: "1rem",
        letterSpacing:"1px"
    },
    avatar: {
        [theme.breakpoints.down("xs")]:{
            width: "35px",
            height: "35px"
        },
        width: 60,
        height: 60,

    },
    item: {
        [theme.breakpoints.down("xs")]:{
            height: theme.spacing.unit * 5,
        },
        height: theme.spacing.unit * 6,
        "&:hover":{
            background: "#49a09d"
        },
    },
    itemText: {
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.8rem"
        },
        color: "#ffffff",
        letterSpacing: "1px",
        fontSize: "0.9rem"
    },
    logOut: {
        [theme.breakpoints.down("xs")]:{
            marginLeft: theme.spacing.unit * 4,
            fontSize: "0.6rem",
        },
        color: "#ffffff",
        letterSpacing: "1px",
        fontSize: "0.7rem",
        height: theme.spacing.unit * 5,
        width: theme.spacing.unit * 6,
        marginLeft: theme.spacing.unit * 12,
        marginTop: theme.spacing.unit * 10,
        "&:hover":{
            background: "#49a09d",
        },
    }
});