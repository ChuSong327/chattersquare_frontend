export const styles = theme => ({
    button: {
        color: theme.palette.primary.contrastText,
        backgroundColor: "transparent",
        margin: theme.spacing.unit * 0.5,
        borderRadius: "5px",
        letterSpacing: "1px",
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.5rem",
            minWidth: "auto",
            minHeihgt: "0.5rem",
            padding: "0px 2px 0px 2px"
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "0.8rem"
        },
        [theme.breakpoints.up("lg")]:{
            fontSize:"0.8rem"
        },
        "&:hover": {
            backgroundColor: "rgba(95,44,130, 0.2)"
        },
        "&:after": {
            border: "none"
        }
    },
    form:{
        display:"flex",
        flexDirection: "row",
        justifyContent:"space-around",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            justifyContent:"flex-start",
        },
    },
    input: {
        [theme.breakpoints.down("xs")]: {
            paddingLeft: 0,
            fontSize: "0.6rem",
            margin: "2px",
        },
        margin: theme.spacing.unit * 0.5,
        paddingLeft: theme.spacing.unit,
        color: theme.palette.primary.contrastText,
        fontSize: "1rem",
        "&:after": {
            borderBottomColor: theme.palette.primary.contrastText,
            borderBottomWidth: "0.6px"
        },
    }
});