export const styles = theme => ({
    root:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",       
        marginTop: theme.spacing.unit * 5,
        marginLeft: theme.spacing.unit * 5,
        [theme.breakpoints.down("xs")]:{
            margin: theme.spacing.unit,
            alignItems: "flex-start",
        },
    },
    card: {
        height: "auto",
        width: "100%",
        boxShadow: "none",
        marginBottom: theme.spacing.unit * 2,
        [theme.breakpoints.down("xs")]:{
            height: theme.spacing.unit * 12,
        },
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",
        [theme.breakpoints.down("xs")]:{
            flexDirection: "column",
            justifyContent:"flex-start",
            alignItems: "flex-start",
        }
    },
    mainInfo: {
        display: "flex",
        flexDirection: "row",
    },
    avatar: {
        height: 55,
        width: 55,
        [theme.breakpoints.down("xs")]:{
            height: 30,
            width: 30,
        },
    },
    userName: {
        fontSize: "1.2rem",
        paddingTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.8rem",
            padding: 0,
            marginLeft: theme.spacing.unit
        },
    },
    userInfo: {
        paddingTop: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 8,
        width: "70%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.down("xs")]:{
            flexDirection: "column",
            alignItems:"flex-start",
            paddingLeft: theme.spacing.unit * 3
        },
    },
    contact: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: theme.spacing.unit,
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.8rem"
        },
    },
    emailAndPhone: {
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.6rem"
        }
    },
    icon: {
        color: "#BDBDBD",
        fontSize: "1.1rem",
        paddingTop: theme.spacing.unit * 0.3,
        marginRight: theme.spacing.unit * 1.2,
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.7rem"
        },
    },
    iconChat:{
        color: "#4DB6AC", 
        cursor: "pointer",
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.7rem",
            padding: 0
        },
    },
    iconDelete: {
        color: "#E57373", 
        marginLeft: theme.spacing.unit * 2, 
        cursor:"pointer",
        [theme.breakpoints.down("xs")]:{
            fontSize: "0.7rem",
            padding: 0
        },
    }
});