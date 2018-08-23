export const styles = theme => ({
    root: {
        [theme.breakpoints.down("xs")]:{
            paddingTop: "50vmin",
        },
        [theme.breakpoints.up("sm")]:{
            paddingTop: "40vmin",
        },
        [theme.breakpoints.up("md")]:{
            paddingTop: "25vmin",
        },
        [theme.breakpoints.up("lg")]:{
            paddingTop: "25vmin",
        },
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        flexWrap:"wrap",
    },
    left:{
        [theme.breakpoints.down("xs")]:{
            flexBasis: "200px",
        },
        flexBasis: "500px",
    },
    gridOne: {
        width: "100%",
        borderRadius: "12px",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        boxShadow: "5px",
        height:"480px",
        [theme.breakpoints.down("xs")]:{
            height: "400px",
        },
        [theme.breakpoints.up("sm")]:{
            fontSize: "1.3rem",
            marginTop:"37px"
        },
        [theme.breakpoints.up("md")]:{
            fontSize: "1.5rem",
            marginTop:"55px"
        },
        [theme.breakpoints.up("lg")]:{
            fontSize: "1.8rem",
            marginTop:"55px"
        },
    },
    gridTwo: {
        width: "100%",
        backgroundColor: "transparent",
        boxShadow: "none",
        paddingBottom: theme.spacing.unit * 8,
        [theme.breakpoints.up("md")]:{
            marginLeft:theme.spacing.unit * 3,
        },
    },
    title: {
        [theme.breakpoints.down("xs")]:{
            fontSize: "1rem",
            marginTop: "34px",
        },
        [theme.breakpoints.up("sm")]:{
            fontSize: "1.3rem",
            marginTop:"37px"
        },
        [theme.breakpoints.up("md")]:{
            fontSize: "1.5rem",
            marginTop:"55px"
        },
        [theme.breakpoints.up("lg")]:{
            fontSize: "1.8rem",
            marginTop:"55px"
        },
        marginLeft: "2px",
        fontFamily: "Tangerine, cursive",
        letterSpacing: "1.2px",
        color:"rgb(255,255,255)"
    },
    circle: {
        [theme.breakpoints.down("xs")]:{
            height: "85px",
            width: "85px",
            marginTop:"-45px",
            marginLeft: "130px"
        },
        [theme.breakpoints.up("sm")]:{
            height: "100px",
            width: "100px",
            marginTop:"-18px",
            marginLeft: "200px"
        },
        [theme.breakpoints.up("md")]:{
            height: "120px",
            width: "120px",
            marginTop:"-20px",
            marginLeft: "180px"
        },
        [theme.breakpoints.up("lg")]:{
            height: "135px",
            width: "135px",
            marginTop:"-20px",
            marginLeft: "200px"
        },
        borderRadius: "50%",
        backgroundColor: "rgba(73, 160, 157, 0.9)",
        display:"inline-block",
        position: "absolute",
        
    },
    formControl: {
        [theme.breakpoints.down("xs")]: {
            margin: theme.spacing.unit * 1,
            marginTop: theme.spacing.unit * 3
        },
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit * 10,
            marginTop: theme.spacing.unit * 6
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: theme.spacing.unit * 10,
            marginTop: theme.spacing.unit * 6
        },
    },
    inputLabel: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem",
        },
        color: "rgba(255,255,255, 0.3)",
        fontWeight: 300,
        fontSize: "1rem",
        paddingTop: "5px",
        paddingLeft: theme.spacing.unit
    },
    input: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem",
            width: theme.spacing.unit * 36
        },
        color: theme.palette.primary.contrastText,
        fontWeight: 300,
        fontSize: "1rem",
        height: "32px",
        width: theme.spacing.unit * 40,
        paddingLeft: theme.spacing.unit,
        "&:after": {
            borderBottomColor: theme.palette.primary.contrastText,
            borderBottomWidth: "0.6px"
        },
    },
    nameInput: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8rem",
            width: theme.spacing.unit * 15,
        },
        color: theme.palette.primary.contrastText,
        fontWeight: 300,
        fontSize: "1rem",
        height: "32px",
        width: theme.spacing.unit * 18,
        paddingLeft: theme.spacing.unit,
        "&:after": {
            borderBottomColor: theme.palette.primary.contrastText,
            borderBottomWidth: "0.6px"
        },
    },
    greeting: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "1rem",
            paddingTop: theme.spacing.unit * 8,
            
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "1.1rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1.3rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "1.5rem",
        },
        color: "rgb(255, 255, 255)",
        fontSize: "1.5rem",
        letterSpacing:"0.1px",
        paddingTop: theme.spacing.unit * 15
    },
    slogan: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.2rem",
            paddingTop: theme.spacing.unit * 1,
            textAlign:"center"
        },
        color: "rgb(255, 255, 255)",
        fontSize:"1.5rem",
        fontWeight:300,
        paddingTop: theme.spacing.unit * 3,
        fontStyle: "italic"
    },
    button: {
        [theme.breakpoints.down("xs")]: {
            marginLeft: theme.spacing.unit * 16,
            marginTop: theme.spacing.unit * 3,
            fontSize: "0.5rem",
            minWidth: "1rem",
        },
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit * 25,
            marginTop: theme.spacing.unit * 4,
            fontSize: "0.8rem",
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: theme.spacing.unit * 25,
            marginTop: theme.spacing.unit * 4,
            fontSize: "0.8rem",
        },
        color: theme.palette.primary.contrastText,
        backgroundColor: "transparent",
        borderRadius: "5px",
        letterSpacing: "1px",
        
        "&:hover": {
            backgroundColor: "rgba(95,44,130, 0.2)"
        }
    },
});