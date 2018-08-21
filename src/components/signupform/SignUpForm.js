import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import { withStyles } from "@material-ui/core/styles";
import { 
    Card, 
    Typography, 
    FormControl, 
    Input, 
    InputLabel, 
    Button, 
} from "@material-ui/core";

const styles = theme => ({
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
            marginTop:"-50px",
            marginLeft: "200px"
        },
        [theme.breakpoints.up("md")]:{
            height: "120px",
            width: "120px",
            marginTop:"-70px",
            marginLeft: "180px"
        },
        [theme.breakpoints.up("lg")]:{
            height: "135px",
            width: "135px",
            marginTop:"-70px",
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

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            created_at: new Date()
        };
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this); 
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        const id = event.target.id;
        this.setState({
            [ id ]: event.target.value
        });
    };

    handleSignUpSubmit(event) {
        event.preventDefault();
        const params = this.state;
        localStorage.setItem("currentUser", JSON.stringify(params));
        this.props.signUp(params).then(res => {
            const id = res[0].id;
            this.context.router.history.push(`/users/${id}/dashboard/chatrooms`);
        });
    };

    render(){
        const { classes, theme } = this.props;
        return(
            <div className={ classes.root }>
                <div className={ classes.left }>
                    <div className={ classes.circle }>
                        <div className={ classes.title }>
                            ChatterSqaure
                        </div>
                    </div>
                    <Card className={ classes.gridOne }>
                        <form onSubmit={this.handleSignUpSubmit}>
                            <FormControl
                                required={true}
                                className={ classes.formControl }>
                                <InputLabel 
                                    name="username" 
                                    type="text"
                                    className={ classes.inputLabel }>
                                    Username
                                </InputLabel>
                                <Input 
                                    required
                                    id="username" 
                                    className={ classes.input }
                                    value={ this.state.username }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl><br/>
                            <FormControl 
                                required={true}
                                className={ classes.formControl }>
                                <InputLabel 
                                    name="password" 
                                    className={ classes.inputLabel }>
                                    Password
                                </InputLabel>
                                <Input 
                                    id="password" 
                                    type="password"
                                    className={ classes.input }
                                    value={ this.state.password }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl><br/>
                            <FormControl 
                                required={true}
                                className={ classes.formControl }>
                                <InputLabel 
                                    name="firstname" 
                                    type="text"
                                    className={ classes.inputLabel }>
                                    First Name
                                </InputLabel>
                                <Input 
                                    id="firstname" 
                                    className={ classes.nameInput }
                                    value={ this.state.firstname }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl>
                            <FormControl
                                required={true}>
                                <InputLabel 
                                    name="lastname" 
                                    className={ classes.inputLabel }
                                    style={{ paddingLeft: theme.spacing.unit * 4 }}>
                                    Last Name
                                </InputLabel>
                                <Input 
                                    id="lastname" 
                                    type="text"
                                    className={ classes.nameInput }
                                    style={{ marginLeft: theme.spacing.unit * 3 }}
                                    value={ this.state.lastname }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl><br/>
                            <FormControl
                                required={true} 
                                className={ classes.formControl }>
                                <InputLabel 
                                    name="email" 
                                    className={ classes.inputLabel }>
                                    Email
                                </InputLabel>
                                <Input 
                                    id="email"
                                    type="text" 
                                    className={ classes.input }
                                    value={ this.state.email }
                                    onChange={ this.handleInputChange }
                                />
                            </FormControl><br/>
                            <Button 
                                variant="contained" 
                                type="submit"
                                className={ classes.button }
                                >
                                Sign Up
                            </Button> 
                            </form>
                    </Card>
                </div>
                <div>
                    <Card className={ classes.gridTwo }>
                        <Typography 
                            component="p" 
                            className={ classes.greeting }> 
                            A community for you to learn and grow. 
                        </Typography><br/>
                        <Typography 
                            component="p" 
                            className={ classes.slogan }> 
                            Join and make an impact.  
                        </Typography>
                    </Card>
                </div>
            </div>
        )
    }
};
SignUpForm.contextTypes = {
    router: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme:true })(SignUpForm);