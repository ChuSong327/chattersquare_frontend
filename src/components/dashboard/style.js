const drawerWidth = 260;
export const styles = theme => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "calc(120px)",
            width: "calc(100% - 120px)"
        },
        marginLeft: `calc(${drawerWidth}px)`,
        position: "absolute",
        overflow: "hidden",
        width: `calc(100% - ${drawerWidth}px)`
    },
    appbar: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: "calc(120px)",
            width: "calc(100% - 120px)"
        },
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        background: "linear-gradient(to right,  #5f2c82, #49a09d)",
        position: "fixed"
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        [theme.breakpoints.down("xs")]:{
            display:"none"
        },
        color: theme.palette.primary.contrastText,
        letterSpacing: "1px",
        fontWeight: 300
    },
    tabContent: {
        letterSpacing: "1.2px",
        [theme.breakpoints.down("xs")]:{
            width: "25%",
        }
    },
    tabLabel: {
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.5rem",
        },
    },
    tabContainer: {
        marginLeft: drawerWidth,
        marginTop: "200px",
        width: "100%",
    }
});