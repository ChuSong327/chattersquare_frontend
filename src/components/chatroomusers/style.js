export const styles = theme => ({
    usersContainer: {
        marginTop: theme.spacing.unit * 10,
        marginLeft: theme.spacing.unit * 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        flexWrap: "wrap",
        [theme.breakpoints.down("xs")]:{
            marginTop: theme.spacing.unit * 7,
            marginLeft: theme.spacing.unit * 2,
        }
    },
    card: {
        display:"flex",
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems: "center",
        boxShadow: "none",
        height: theme.spacing.unit * 12,
        width: theme.spacing.unit * 26,
        [theme.breakpoints.down("xs")]:{
            flexDirection: "row",
            height: theme.spacing.unit * 7,
        }
    },
    userName: {
        marginTop: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 2.5,
        display: "inline-block",
        [theme.breakpoints.down("xs")]:{
            marginLeft: theme.spacing.unit,
        }
    },
    button: {
        color: "#BDBDBD",
        [theme.breakpoints.down("xs")]:{
            fontSize: "1rem"
        }
    },
    avatar: {
        cursor: "pointer", 
        height: theme.spacing.unit * 6, 
        width: theme.spacing.unit * 6, 
        [theme.breakpoints.down("xs")]:{
            height: 30, 
            width: 30, 
        }
    }
});