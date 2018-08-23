export const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "inherit", 
        boxShadow:"none",
        position: "fixed",
        top: 0,
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            justifyContent:"flex-start",
        },
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem",
            marginRight: theme.spacing.unit
        },
        marginRight: "auto",
        marginLeft: "auto",
        textDecoration: "none",
        fontSize: "1.1rem",
        letterSpacing: theme.spacing.unit * 0.2,
        color: theme.palette.primary.contrastText
    }
});