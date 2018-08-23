const drawerWidth = 260;
export const styles = theme => ({
    root: {
        marginLeft: `calc(${drawerWidth}px)`,
        position: "absolute",
        overflow: "hidden",
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down("xs")]: {
            marginLeft: "calc(120px)",
            width: "calc(100% - 120px)"
        },
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        background: "linear-gradient(to right,  #5f2c82, #49a09d)",
        position: "fixed",
        [theme.breakpoints.down("xs")]: {
            marginLeft: "calc(120px)",
            width: "calc(100% - 120px)"
        },
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        color: theme.palette.primary.contrastText,
        letterSpacing: "1px",
        fontWeight: 300,
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.8rem"
        }

    }
});