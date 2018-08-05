import React, { Component } from "react";
import PropTypes from 'prop-types'; 
import { withStyles } from "@material-ui/core/styles";
import {
    Button,
    FormControl,
    Input,
} from "@material-ui/core";

const styles = theme => ({
    button: {
        color: theme.palette.primary.contrastText,
        backgroundColor: "transparent",
        margin: theme.spacing.unit * 0.5,
        borderRadius: "5px",
        letterSpacing: "1px",
        fontSize: "0.8rem",
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
    },
    input: {
        margin: theme.spacing.unit * 0.5,
        paddingLeft: theme.spacing.unit,
        height: "32px",
        color: theme.palette.primary.contrastText,
        fontSize: "1rem",
        "&:after": {
            borderBottomColor: theme.palette.primary.contrastText,
            borderBottomWidth: "0.6px"
        },
    }
});

class SignInForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoClick = this.handleDemoClick.bind(this);
    };

    handleInputChange(event) {
        event.preventDefault();
        const name = event.target.name;
        this.setState({
            [ name ]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const params = this.state;
        this.props.signIn(params).then(res => {
            console.log("GET HERE!!!!!!")
            const id = res[0].id;
            this.context.router.history.push(`/users/${id}/dashboard/chatrooms`);
        });
    }

    handleDemoClick(){
        this.setState({
            username:"user23",
            password: "123456",
        });
    }
    
    render(){
        const { classes } = this.props;
        return(
            <div className={ classes.form }>
            <form onSubmit={ this.handleSubmit }>
                <FormControl
                    required={true}  
                    action="/">
                    <Input
                        type="text"
                        name="username"
                        required={true}   
                        placeholder="Username" 
                        className={ classes.input }
                        value={ this.state.username }
                        onChange={ this.handleInputChange }
                    />
                </FormControl>
                <FormControl required={true}>
                    <Input 
                        type="password"
                        name="password" 
                        required={true}  
                        autoComplete="current-password"
                        placeholder="Password" 
                        className={ classes.input }
                        value={ this.state.password }
                        onChange={ this.handleInputChange }
                    />
                </FormControl>
                <Button
                    variant="contained"
                    type="submit"
                    className={ classes.button }
                    >
                    Sign in
                </Button>
                <Button
                    variant="contained"
                    className={ classes.button }
                    onClick={ this.handleDemoClick }>
                    Demo
                </Button>
            </form>
        </div>
        )
    }
};

SignInForm.contextTypes = {
    router: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(SignInForm);