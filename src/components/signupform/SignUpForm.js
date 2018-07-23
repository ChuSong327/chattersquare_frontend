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
        paddingTop: "25vmin",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        flexWrap:"wrap",
    },
    left:{
        flexBasis: "500px",
    },
    gridOne: {
        borderRadius: "12px",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        boxShadow: "5px",
        height:"480px"
    },
    gridTwo: {
        backgroundColor: "transparent",
        boxShadow: "none",
        marginLeft:theme.spacing.unit * 3,
    },
    title: {
        marginTop: "41px",
        marginLeft: "1px",
        fontSize: "1.9rem",
        fontFamily: "Tangerine, cursive",
        letterSpacing: "1.2px",
        color:"rgb(255,255,255)"
    },
    circle: {
        height: "115px",
        width: "115px",
        borderRadius: "50%",
        backgroundColor: "rgba(73, 160, 157, 0.9)",
        display:"inline-block",
        position: "absolute",
        marginTop: "-60px",
        marginLeft: "200px"
    },
    formControl: {
        marginLeft: theme.spacing.unit * 10,
        marginTop: theme.spacing.unit * 6
    },
    inputLabel: {
        color: "rgba(255,255,255, 0.3)",
        fontSize: "1rem",
        fontWeight: 300,
        paddingTop: "5px",
        paddingLeft: theme.spacing.unit
    },
    input: {
        color: theme.palette.primary.contrastText,
        fontSize: "1rem",
        fontWeight: 300,
        height: "32px",
        width: theme.spacing.unit * 40,
        paddingLeft: theme.spacing.unit,
        "&:after": {
            borderBottomColor: theme.palette.primary.contrastText,
            borderBottomWidth: "0.6px"
        },
    },
    nameInput: {
        color: theme.palette.primary.contrastText,
        fontSize: "1rem",
        fontWeight: 300,
        height: "32px",
        width: theme.spacing.unit * 18,
        paddingLeft: theme.spacing.unit,
        "&:after": {
            borderBottomColor: theme.palette.primary.contrastText,
            borderBottomWidth: "0.6px"
        },
    },
    greeting: {
        color: "rgb(255, 255, 255)",
        fontSize: "1.5rem",
        letterSpacing:"0.1px",
        paddingTop: theme.spacing.unit * 15
    },
    slogan: {
        color: "rgb(255, 255, 255)",
        fontSize:"1.5rem",
        fontWeight:300,
        paddingTop: theme.spacing.unit * 3,
        fontStyle: "italic"
    },
    button: {
        color: theme.palette.primary.contrastText,
        backgroundColor: "transparent",
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 25 ,
        borderRadius: "5px",
        letterSpacing: "1px",
        fontSize: "0.8rem",
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
        const params = this.state;
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
                            ChatterBox
                        </div>
                    </div>
                    <Card className={ classes.gridOne }>
                        <FormControl 
                            className={ classes.formControl }>
                            <InputLabel 
                                name="username" 
                                type="text"
                                className={ classes.inputLabel }>
                                Username
                            </InputLabel>
                            <Input 
                                id="username" 
                                className={ classes.input }
                                value={ this.state.username }
                                onChange={ this.handleInputChange }
                            />
                        </FormControl><br/>
                        <FormControl className={ classes.formControl }>
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
                        <FormControl className={ classes.formControl }>
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
                        <FormControl>
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
                        <FormControl className={ classes.formControl }>
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
                            type="button"
                            className={ classes.button }
                            onClick={ this.handleSignUpSubmit }>
                            Sign Up
                        </Button> 
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